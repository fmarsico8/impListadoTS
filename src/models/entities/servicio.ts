import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Establecimiento } from "./establecimiento";
import { Incidente } from "./incidente";
import { TipoServicio } from "./tipoServicio";

@Entity()
export class Servicio {

    establecimiento!: Establecimiento;
    
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    nombre!: string

    @ManyToOne(() => TipoServicio)
    @JoinColumn({ name: "tipoServicio_id" })
    tipoServicio!:TipoServicio

    @Column()
    estaActivo!:boolean

    @OneToMany(() => Incidente, (incidente) => incidente.servicio )
    incidentes!:Incidente[]

}