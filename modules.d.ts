declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;

    REDIS_URI: string;

    OTP_EXPIRATION_TIME_IN_MINS: string;
    OTP_EXPIRATION_TIME: string;
    TEST_OTP: string;

    JWT_ISSUER: string;
    JWT_AUDIENCE: string;
    AUTH_TOKEN_EXPIRATION: string;
    SECRET_KEY: string;

    DB_TYPE: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  }
}
