import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

routes.post('/usuario', UsuarioController.create);

export default routes;