import database from "../../config/database";
import { DatabaseRepository, Id, Query } from "../../declarations";
import { Servicio } from "../entities/servicio";

export class ServicioRepository implements DatabaseRepository<Servicio> {
    create(data: Partial<Servicio>, query?: Query | undefined): Promise<Servicio> {
        throw new Error("Method not implemented.");
    }
    list(query?: Query | undefined): Promise<Servicio[]> {
        const repository = database.getRepository(Servicio);

        return repository.find();    }
    get(id: Id, query?: Query | undefined): Promise<Servicio> {
        throw new Error("Method not implemented.");
    }
    
}