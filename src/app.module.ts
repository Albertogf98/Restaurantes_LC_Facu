/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModules } from './restaurants/restaurants.module';

@Module({
  imports: [RestaurantsModules],
  controllers: [],
  providers: [],
})
export class AppModule { }
