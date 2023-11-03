import { In } from "typeorm";
import database from "../../config/database";
import { DatabaseRepository, Id, Query } from "../../declarations";
import { Incidente } from "../entities/incidente";

export class IncidenteRepository implements DatabaseRepository<Incidente> {
    create(data: Partial<Incidente>, query?: Query | undefined): Promise<Incidente> {
        throw new Error("Method not implemented.");
    }
    list(query?: Query | undefined): Promise<Incidente[]> {
        const repository = database.getRepository(Incidente);

        return repository.find();    }
    get(id: Id, query?: Query | undefined): Promise<Incidente> {
        throw new Error("Method not implemented.");
    }
    
}