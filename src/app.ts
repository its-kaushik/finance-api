require('dotenv').config();

import dbInit from './database/dbInit';
import { envs } from './env';
import { init } from './utils';
import { RedisClient } from './utils/redis.utils';
import 'reflect-metadata';

const app = init();

const PORT = envs.PORT;

dbInit()
  .then(() => {
    console.log('Database is up and running');
    RedisClient.connect();
    app.listen(PORT, async () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
  });

module.exports = app;
