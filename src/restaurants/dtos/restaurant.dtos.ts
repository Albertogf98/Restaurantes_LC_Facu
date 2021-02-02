/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class RestaurantDTO {

    @IsString() @IsNotEmpty() @MaxLength(255)
    name: string;

    @IsString() @IsNotEmpty() @MaxLength(255)
    location: string;

    @IsInt()
    point: number;
}