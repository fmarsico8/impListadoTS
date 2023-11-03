import { Router } from "express";
import { IncidenteController } from "../controllers/incidente.controller";
import { IncidenteRepository } from "../models/repositories/incidente.repository";
import { EstablecimientoController } from "../controllers/establecimiento.controller";
import { EstablecimientoRepository } from "../models/repositories/establecimiento.repository";
import { ServicioController } from "../controllers/servicio.controller";
import { ServicioRepository } from "../models/repositories/servicio.repository";

const router = Router()

const incidenteController = new IncidenteController(new IncidenteRepository)
const establecimientoController = new EstablecimientoController(new EstablecimientoRepository)
const servicioController = new ServicioController(new ServicioRepository)

router.get("/incidentes", incidenteController.list.bind(incidenteController))
router.get("/establecimientos", establecimientoController.list.bind(establecimientoController))
router.get("/servicio", servicioController.list.bind(servicioController))



export default router;