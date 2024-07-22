import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// criando os recursos
@Entity({name: 'tb_postagem'})
export class Postagem {
    
    @PrimaryGeneratedColumn()  // id int AUTOINCRIMENT , chave primaria auto incrimental
    id: number; 

    @IsNotEmpty()  // nao aceita valor vazio
    @Column({length: 100, nullable: false}) // defini o tamanho e nao aceita valor nulo
    titulo: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // a data e a hora serao preenchiadas automaticamente
    data: Date;

}