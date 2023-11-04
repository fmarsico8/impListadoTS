import {Request, Response, NextFunction} from "express";
import { DatabaseRepository } from "../declarations";
import { Establecimiento } from "../models/entities/establecimiento";
import { Comunidad } from "../models/entities/comunidad";

export class ComunidadController {
        constructor(private repository: DatabaseRepository<Comunidad>){}
        
        async list( req: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const establecimiento = await this.repository.list();
                res.status(200).json(establecimiento)
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
