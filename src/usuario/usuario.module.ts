import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.module";



@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [],
    controllers: [],
    exports: []
})

export class UsuarioModule { }