/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe, Delete, Put } from "@nestjs/common";
import { RestaurantsService } from "../services/restaurants.service";

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantsService) { }

}
