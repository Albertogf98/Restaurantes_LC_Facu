/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RestaurantEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 255 })
    name: string;

    @Column({ nullable: false, length: 255 })
    location: string;

    @Column({ nullable: true })
    point: number;
}