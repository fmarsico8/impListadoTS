import express from "express";
//import TaskRoutes from "./task/task.routes"
import "reflect-metadata"
//import database from "./config/database";
import { Liquid } from "liquidjs";
import path from "path";
import database from "./config/database";
import router from "./server/router.routes";
const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: false}))

const engine = new Liquid({
  root: "./src/views",
  extname: '.liquid'
});

const publicPath = path.resolve('src\public', 'public')
app.use(express.static(publicPath))

app.engine('liquid', engine.express())
app.set('views', './src/public/views')
app.set('view engine', 'liquid')

database.initialize()
  .then(() => console.log("DB connected"))
  .catch(console.error)

  app.use(router)
  

  app.listen(3000, () => {
    console.log("App execute in port 3000")
})
