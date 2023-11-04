import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoServicio } from "./tipoServicio";

@Entity()
export class Comunidad {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    nombre!: string

    @ManyToMany(() => TipoServicio)
    @JoinTable({
      name: "comunidad_tiposervicio",
      joinColumn: {
        name: "comunidad_id",
        referencedColumnName: "id",
      },
      inverseJoinColumn: {
        name: "serviciosDeInteres_id",
        referencedColumnName: "id",
      },
    })
    serviciosDeInteres!: TipoServicio[];
    
}