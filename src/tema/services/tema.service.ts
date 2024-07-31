import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";



@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private temaRepository: Repository<Tema>
    ) {}
    
    async findAll(): Promise<Tema[]>{
        return await this.temaRepository.find();

    }
}