import { Router } from 'express';

import statesRoutes from '@modules/states/infra/http/routes/states.routes';

const routes = Router();

routes.use('/states', statesRoutes);

export default routes;
