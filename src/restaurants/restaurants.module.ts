/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DbModule } from 'src/databases/db.module';
import { RestaurantController } from './controllers/restaurants.controller';
import { RestaurantsService } from './services/restaurants.service';

@Module({
    imports: [DbModule],
    controllers: [RestaurantController],
    providers: [RestaurantsService],
})
export class RestaurantsModules { }
