import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'tiposervicio' })
export class TipoServicio {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nombre!: string
}