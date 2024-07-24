import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

// criando os recursos
@Entity({name: 'tb_postagem'})
export class Postagem {
    
    @PrimaryGeneratedColumn()  // id int AUTOINCRIMENT , chave primaria auto incrimental
    id: number; 

    @Transform(({ value }: TransformFnParams) => value?.trim()) // bloquear apenas espacos em branco
    @IsNotEmpty()  // nao aceita valor vazio
    @Column({length: 100, nullable: false}) // defini o tamanho e nao aceita valor nulo
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // bloquear apenas espacos em branco
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // a data e a hora serao preenchiadas automaticamente
    data: Date;

    @ManyToOne(() => Tema , (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema:Tema

}