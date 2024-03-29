import { readFileSync } from 'fs';
import { join } from 'path';
import { sign, SignOptions, verify } from 'jsonwebtoken';
import uuid4 from 'uuid4';
import { RedisClient } from './redis.utils';
import { customError } from './error.utils';
import { INVALID_SESSION } from '../constants/error';
import { envs } from '../env';

const publicKey = readFileSync(
  join(`${__dirname}/../../keys/jwtPublic.key`),
  'utf8'
);
const privateKey = readFileSync(
  join(`${__dirname}/../../keys/jwtPrivate.key`),
  'utf8'
);

const options: SignOptions = {
  issuer: envs.JWT_ISSUER,
  subject: 'Authentication Token',
  audience: envs.JWT_AUDIENCE,
  algorithm: 'RS256',
  expiresIn: envs.AUTH_TOKEN_EXPIRATION || '30d',
};

const generateJWT = async (payload: any) => {
  return await sign(
    payload,
    { key: privateKey, passphrase: envs.SECRET_KEY || 'secret' },
    options
  );
};

const getSessionId = () => {
  return uuid4();
};

const getJwtRedisKey = (userId: any) => {
  return `JWT:${userId}`;
};

export const validateSession = async (payload: any) => {
  const storedSessionId = await RedisClient.get(getJwtRedisKey(payload.userId));
  if (storedSessionId !== payload.sessionId) throw customError(INVALID_SESSION);
};

export const getJWT = async (payload: any) => {
  const sessionId = getSessionId();
  const { entityId, userId, role, isDetailsComplete, name, email } = payload;
  const token = await generateJWT({
    name,
    email,
    userId,
    entityId,
    role,
    sessionId,
    isDetailsComplete,
  });

  await RedisClient.setWithExpiry(
    getJwtRedisKey(payload.userId.toString()),
    sessionId,
    parseInt(envs.AUTH_TOKEN_EXPIRATION || '30d', 10) * 24 * 60 * 60
  );
  return token;
};

export const invalidateJwt = async (userId: string) => {
  await RedisClient.delete(getJwtRedisKey(userId));
};

export const verifyJWT = async (token: string) => {
  return await verify(token, publicKey, options);
};
