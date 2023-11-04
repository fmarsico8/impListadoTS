import { Router } from "express";
import { IncidenteController } from "../controllers/incidente.controller";
import { IncidenteRepository } from "../models/repositories/incidente.repository";
import { EstablecimientoController } from "../controllers/establecimiento.controller";
import { EstablecimientoRepository } from "../models/repositories/establecimiento.repository";
import { ServicioController } from "../controllers/servicio.controller";
import { ServicioRepository } from "../models/repositories/servicio.repository";
import { TipoServicioController } from "../controllers/tipoServicio.controller";
import { TipoServicioRepository } from "../models/repositories/tipoServicio.repository";
import { ComunidadController } from "../controllers/comunidad.controller";
import { ComunidadRepository } from "../models/repositories/comunidad.repository";

const router = Router()

const incidenteController = new IncidenteController(new IncidenteRepository)
const establecimientoController = new EstablecimientoController(new EstablecimientoRepository)
const servicioController = new ServicioController(new ServicioRepository)
const tipoServicioController = new TipoServicioController(new TipoServicioRepository)
const comunidadController = new ComunidadController(new ComunidadRepository)

router.get("/incidentes", incidenteController.list.bind(incidenteController))
router.get("/establecimientos", establecimientoController.list.bind(establecimientoController))
router.get("/servicio", servicioController.list.bind(servicioController))
router.get("/tipoServicio", servicioController.list.bind(tipoServicioController))
router.get("/servicio/:id", servicioController.filter.bind(servicioController))
router.get("/comunidad", comunidadController.list.bind(comunidadController))
router.get("/incidente/listado", servicioController.listado.bind(servicioController))





export default router;