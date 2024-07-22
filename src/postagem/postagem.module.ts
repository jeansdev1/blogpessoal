import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { Module } from "@nestjs/common";
import { PostagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";



@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]

})
export class PostagemModule { }
