/* eslint-disable prettier/prettier */
import { createConnection } from 'typeorm';

import { DB_CONNECTION_TOKEN } from '../shared/db.tokens';

export const dbProviders = [{
    provide: DB_CONNECTION_TOKEN,
    useFactory: async () => await createConnection(
        {
            type: 'postgres',
            username: 'restaurantUser',
            password: 'password',
            host: '127.0.0.1',
            port: 5432,
            database: 'restaurantDB',
            synchronize: true,
            logging: true,
            entities: ['dist/**/*.entity{,ts,.js}'],
        }
    )
}];