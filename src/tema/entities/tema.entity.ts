import { IsNotEmpty } from "class-validator";
<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_tema'})
=======
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({name: 'tb_temas'})
>>>>>>> af2ced332addb4dddb60666f941b8a4ff7b592fd
export class Tema{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
<<<<<<< HEAD
    @Column({length: 1000, nullable: false})
    descricao: string
=======
    @Column({length: 255, nullable: false})
    descricao: string
    
    @OneToMany(()  => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]

>>>>>>> af2ced332addb4dddb60666f941b8a4ff7b592fd
}