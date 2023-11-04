import { In } from "typeorm";
import database from "../../config/database";
import { DatabaseRepository, Id, Query } from "../../declarations";
import { Comunidad } from "../entities/comunidad";

export class ComunidadRepository implements DatabaseRepository<Comunidad> {
    create(data: Partial<Comunidad>, query?: Query | undefined): Promise<Comunidad> {
        throw new Error("Method not implemented.");
    }
    list(query?: Query | undefined): Promise<Comunidad[]> {
        const repository = database.getRepository(Comunidad);

        return repository.find({ relations: ['serviciosDeInteres'] });    }
    get(id: Id, query?: Query | undefined): Promise<Comunidad> {
        throw new Error("Method not implemented.");
    }
    
}