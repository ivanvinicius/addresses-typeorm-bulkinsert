import { Router } from 'express';

import StatesController from '../controllers/StatesController';

const statesRouter = Router();

const statesController = new StatesController();

statesRouter.post('/', statesController.create);

export default statesRouter;
