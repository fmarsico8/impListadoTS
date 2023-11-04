import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Servicio } from "./servicio";

@Entity()
export class Incidente {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    estado!: String

    @Column()
    fechaApertura!:Date

    @Column()
    fechaCierre!:Date

    @Column()
    descripcion!:string

    @Column()
    miembroDeApertura!:number

    @Column()
    miembroDeCierre!:number

    @Column()
    descripcionLugar!:string

    @ManyToOne(() => Servicio, (servicio) => servicio.incidentes)
    @JoinColumn({ name: "servicio_id" })
    servicio!: Servicio;
    }