import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./entities/tema.entity";
<<<<<<< HEAD
import { TemaController } from "./controllers/tema.controller";
import { TemaService } from "./services/tema.service";


=======
import { TemaService } from "./services/tema.service";
import { TemaController } from "./controllers/tema.controller";
>>>>>>> af2ced332addb4dddb60666f941b8a4ff7b592fd

@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService],
    controllers: [TemaController],
    exports: [TypeOrmModule]
})
<<<<<<< HEAD
export class TemaModule {}
=======
export class TemaModule {}
>>>>>>> af2ced332addb4dddb60666f941b8a4ff7b592fd
