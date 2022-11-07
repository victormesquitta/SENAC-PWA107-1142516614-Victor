import { Router, Request, Response } from "express";
 import {CreateUserController} from './controllers/user/CreateUserController';
 import {ReadUserController} from './controllers/user/ReadUserController';
const router = Router();
 //Rotas USER ------------
router.post('/users/ler',new ReadUserController().handle)
//Rotas USER ------------
router.post('/users',new CreateUserController().handle)
export { router };