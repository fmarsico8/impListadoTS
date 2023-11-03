import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Servicio } from "./servicio";

@Entity()
export class Establecimiento {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    nombre!:string

    @Column()
    localidad!:number

    @OneToMany(() => Servicio, (servicio) => servicio.establecimiento)
    servicios!: Servicio[];

    @Column()
    entidad!:number
}