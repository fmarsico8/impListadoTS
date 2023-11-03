import {Request, Response, NextFunction} from "express";
import { DatabaseRepository } from "../declarations";
import { promises } from "dns";
import { Incidente } from "../models/entities/incidente";

export class IncidenteController {
        constructor(private repository: DatabaseRepository<Incidente>){}
        
        async list( req: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const incidente = await this.repository.list();
                res.status(200).json(incidente)
            } catch(error) {
                next(error)
            }
        }

        async create(req: Request, res: Response): Promise<void> {
            try{            
                const body = req.body;

                const libro = await this.repository.create(body)
    
                res.status(200).json(libro);
            }catch (error) {
                next(error);
            }

        }

        async libros(req: Request, res: Response):Promise<void> {
            try {
                const libros = await this.repository.list();
                res.render("incidentes.liquid", {libros})
            } catch(error) {
                next(error)
            }
        }

}

function next(error: unknown) {
    throw new Error("Function not implemented.");
}
