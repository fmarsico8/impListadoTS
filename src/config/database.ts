import { DataSource } from "typeorm";
import { Incidente } from "../models/entities/incidente";
import { Servicio } from "../models/entities/servicio";
import { Establecimiento } from "../models/entities/establecimiento";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "tp",
    entities: [Incidente, Servicio, Establecimiento],
    synchronize: true,
    logging: false
})

