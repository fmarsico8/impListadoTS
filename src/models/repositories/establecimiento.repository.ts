import database from "../../config/database";
import { DatabaseRepository, Id, Query } from "../../declarations";
import { Establecimiento } from "../entities/establecimiento";
import { Servicio } from "../entities/servicio";

export class EstablecimientoRepository implements DatabaseRepository<Establecimiento> {
    create(data: Partial<Establecimiento>, query?: Query | undefined): Promise<Establecimiento> {
        throw new Error("Method not implemented.");
    }
    list(query?: Query | undefined): Promise<Establecimiento[]> {
        const repository = database.getRepository(Establecimiento);

        return repository.find();   
     }
     
    get(id: Id, query?: Query | undefined): Promise<Establecimiento> {
        throw new Error("Method not implemented.");
    }
    
}