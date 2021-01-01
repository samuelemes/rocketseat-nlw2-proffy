import express from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsControllers';


const routes = express.Router();
const classesControlers = new ClassesController();
const connectionsControlers = new ConnectionsController();



/**
 * 
 * Parametros
 * Request Body: vem no corpo, dados para atualização de um registro
 * 
 * Routes Params:
 * identifica qual recurso eu quero atualizar ou deletar. Ele vem na rota (na url) exemplo ":id" 
 * 
 * Query Params: utilizado em listagens, paginação exemplo= "?page, page, etc"
 */
routes.get('/classes', classesControlers.index );
routes.post('/classes', classesControlers.create );

routes.get('/connections', connectionsControlers.index );
routes.post('/connections', connectionsControlers.create );

export default routes;