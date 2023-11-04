import { DataSource } from "typeorm";
import { Incidente } from "../models/entities/incidente";
import { Servicio } from "../models/entities/servicio";
import { Establecimiento } from "../models/entities/establecimiento";
import { TipoServicio } from "../models/entities/tipoServicio";
import { Comunidad } from "../models/entities/comunidad";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "tp",
    entities: [Incidente, Servicio, Establecimiento, TipoServicio, Comunidad],
    synchronize: false,
    migrationsRun:false,
    logging: true
})

