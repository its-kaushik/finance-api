export const defaultConfig: any = {
  type: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'username',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'db',
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  migrations: [`${__dirname}/../migrations/**/*.{ts,js}`],
  synchronize: true,
  logging: true,
};

export const mockConfig: any = {};
