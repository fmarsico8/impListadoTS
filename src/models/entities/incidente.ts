import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Incidente {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    estado!: String

    @UpdateDateColumn()
    fechaApertura!:Date

    @UpdateDateColumn()
    fechaCierre!:Date

    @Column()
    descripcion!:string

    @Column()
    miembroDeApertura!:number

    @Column()
    miembroDeCierre!:number

    @Column()
    descripcionLugar!:string

    servicio: any;
}