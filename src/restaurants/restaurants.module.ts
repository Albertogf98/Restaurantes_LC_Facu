/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DbModule } from '../databases/db.module';
import { RestaurantController } from '../restaurants/controllers/restaurants.controller';
import { RestaurantsService } from '../restaurants/services/restaurants.service';

@Module({
    imports: [DbModule],
    controllers: [RestaurantController],
    providers: [RestaurantsService],
})
export class RestaurantsModules { }
