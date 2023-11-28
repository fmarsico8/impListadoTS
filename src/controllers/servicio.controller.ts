import {Request, Response, NextFunction} from "express";
import { DatabaseRepository } from "../declarations";
import { Servicio } from "../models/entities/servicio";
import { format } from "date-fns";

export class ServicioController {
        constructor(private repository: DatabaseRepository<Servicio>){}
        
        async list( req: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const libro = await this.repository.list();
                res.status(200).json(libro)
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

        async filter(req: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const param = req.params.id;
                const id = parseInt(param, 10);
                const libro = await this.repository.list();
                const filteredLibro = libro.filter((l) => l.tipoServicio.id === id);
                res.status(200).json(filteredLibro);
            } catch (error) {
                next(error);
            }
        }

        async listado(req: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const servicios = await this.repository.list();
        
                // Formatear las fechas de cada incidente
                servicios.forEach(servicio => {
                    servicio.incidentes.forEach(incidente => {
                        incidente.fechaFormateada = format(incidente.fechaApertura, 'dd/MM/yyyy HH:mm:ss');
                    });
                });
        
                res.render("listadoIncidentes.liquid", { servicios });
            } catch (error) {
                next(error);
            }
        }
        

}

function next(error: unknown) {
    throw new Error("Function not implemented.");
}
