import dotenv from 'dotenv';
//DO NOT COMMIT YOUR .env FILE
dotenv.config({ path: '.env' });
import { Config } from './types';

export const config: Config = {
    serviceName: process.env.SERVICENAME || 'node typescript postgres app',
    port: Number(process.env.PORT) || 3000,
    loggerLevel: 'debug',
    db: {
        user: process.env.DB_USER || 'postgres',
        database: process.env.DB || 'insomnia_db',
        password: process.env.DB_PASS || 'password',
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 5432,
        max: Number(process.env.DB_MAX_CLIENTS) || 20,
        idleTimeoutMillis: Number(process.env.DB_IDLE_TIMEOUT_MS) || 30000,
    },
};
