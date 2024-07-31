import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_tema'})
export class Tema{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string
}