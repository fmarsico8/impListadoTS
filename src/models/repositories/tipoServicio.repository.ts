import { In } from "typeorm";
import database from "../../config/database";
import { DatabaseRepository, Id, Query } from "../../declarations";
import { TipoServicio } from "../entities/tipoServicio";

export class TipoServicioRepository implements DatabaseRepository<TipoServicio> {
    create(data: Partial<TipoServicio>, query?: Query | undefined): Promise<TipoServicio> {
        throw new Error("Method not implemented.");
    }
    list(query?: Query | undefined): Promise<TipoServicio[]> {
        const repository = database.getRepository(TipoServicio);

        return repository.find();    }
    get(id: Id, query?: Query | undefined): Promise<TipoServicio> {
        throw new Error("Method not implemented.");
    }
    
}