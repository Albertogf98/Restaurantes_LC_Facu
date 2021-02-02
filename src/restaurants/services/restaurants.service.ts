/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ACTIVITY_REPOSITORY_TOKEN } from 'src/shared/db.tokens';
import { Repository, UpdateResult } from 'typeorm';
import { RestaurantEntity } from '../entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
    constructor(@Inject(ACTIVITY_REPOSITORY_TOKEN) private readonly activityRepo: Repository<RestaurantEntity>) { }
}