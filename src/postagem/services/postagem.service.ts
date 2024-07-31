import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { STATUS_CODES } from "http";

@Injectable()
export class PostagemService {
    TemaService: any;

    // injetar repositorio dentro da classe postagem

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ) {}

    async findAll(): Promise<Postagem[]>{
        // SELECT * FROM tb_postagens;
        return await this.postagemRepository.find({
            relations: {
                tema: true,
                usuario: true
            }
        });

    }
    async findById(id: number): Promise<Postagem>{
        
        let buscaPostagem = await this.postagemRepository.findOne({
            where:{
                id
            },
            relations: {
                tema: true,
                usuario: true
            }
        })
        if (!buscaPostagem)
            throw new HttpException('Postagem não foi encontrada!', HttpStatus.NOT_FOUND)
        return buscaPostagem;
    }

    async findByTitulo(titulo: string): Promise<Postagem[]>{
        
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`)
            },
            relations: {
                tema: true,
                usuario: true
            }
        })
    }

    // salvar 
    async create(postagem: Postagem): Promise<Postagem>{
        if (postagem.tema){
            let tema =  await this.TemaService.findById(postagem.tema.id)
            if (!tema)
                throw new HttpException('tema nao encontrado!', HttpStatus.NOT_FOUND)
            return await this.postagemRepository.save(postagem);
        }
        return await this.postagemRepository.save(postagem);
    }

    async update(postagem: Postagem): Promise<Postagem>{

        let buscaPostagem = await this.findById(postagem.id)

        if (!buscaPostagem || !postagem.id)
            throw new HttpException("A Postagem nao foi encontrada!", HttpStatus.NOT_FOUND)

        if (postagem.tema){
            let tema = await this.TemaService.findById(postagem.tema.id)

            if (!tema) 
                throw new HttpException('tema nao encontrado', HttpStatus.NOT_FOUND)
            return await this.postagemRepository.save(postagem);

        }
        return await this.postagemRepository.save(postagem);
    }

    async delete(id: number): Promise<DeleteResult> {
        let buscaPostagem = await this.findById(id)
        if (!buscaPostagem)
            throw new HttpException('A Postagem não foi encontrada', HttpStatus.NOT_FOUND);
 
        return await this.postagemRepository.delete(id);
    }
}