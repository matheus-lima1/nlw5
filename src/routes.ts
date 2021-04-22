import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsoController";
import { UsersController } from "./controllers/UsersCOntroller";


const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();


routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };