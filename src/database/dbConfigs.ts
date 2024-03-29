import { envs } from '../env';

export const defaultConfig: any = {
  type: envs.DB_TYPE,
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/../migrations/**/*.{ts,js}`],
  synchronize: false,
  logging: false,
};

export const mockConfig: any = {};
