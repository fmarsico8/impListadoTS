import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Establecimiento } from "./establecimiento";
import { Incidente } from "./incidente";

@Entity()
export class Servicio {

    establecimiento!: Establecimiento;
    
    @PrimaryGeneratedColumn()
    id!:number
    
    @Column()
    tipoServicio!:number

    @Column()
    estaActivo!:boolean

    @OneToMany(() => Incidente, (incidente) => incidente.servicio )
    incidentes!:Incidente[]

}