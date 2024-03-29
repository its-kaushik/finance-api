import { cleanEnv, str, port, url, num } from 'envalid';

export const envs = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['DEV', 'PRODUCTION'], default: 'DEV' }),
  PORT: port({ default: 8000 }),

  REDIS_URI: url({ default: 'redis://localhost:6379' }),

  OTP_EXPIRATION_TIME_IN_MINS: num({ default: 5 }),
  OTP_EXPIRATION_TIME: num({ default: 180 }),
  TEST_OTP: str({ default: '6969' }),

  JWT_ISSUER: str({ default: 'protean' }),
  JWT_AUDIENCE: str({ default: 'protean' }),
  AUTH_TOKEN_EXPIRATION: str({ default: '3d' }),
  SECRET_KEY: str({ default: '' }),

  DB_TYPE: str({ default: 'postgres' }),
  DB_HOST: str({ default: 'localhost' }),
  DB_PORT: str({ default: '5432' }),
  DB_USERNAME: str({ default: 'username' }),
  DB_PASSWORD: str({ default: 'password' }),
  DB_NAME: str({ default: 'db' }),
});
