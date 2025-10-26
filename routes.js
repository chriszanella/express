import express from "express";
import homeController from "./src/controllers/homeController.js";
import sobreController from "./src/controllers/sobreController.js";
const route = express.Router();

route.get('/', homeController.get);
route.post('/', homeController.post);

route.get('/sobre{/:id}', sobreController.get);
route.post('/sobre', sobreController.post);

export default route;