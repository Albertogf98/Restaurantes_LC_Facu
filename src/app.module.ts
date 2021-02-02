/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RestaurantsModules } from '../src/restaurants/restaurants.module';

@Module({
  imports: [RestaurantsModules],
  controllers: [],
  providers: [],
})
export class AppModule { }
