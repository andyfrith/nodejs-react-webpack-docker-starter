import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { ENV } from './env';
import { logger } from './logger';

(async () => {
  logger.info('service starting', { ENV });
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:4000',
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use('/healthy', async (req, res) => {
    res.send({
      message: 'service is ok',
    });
  });

  app.listen({ port: ENV.PORT }, () => {
    logger.info(`service listening at :${ENV.PORT}...`);
  });
})();
