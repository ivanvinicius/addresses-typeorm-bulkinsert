import { container } from 'tsyringe';

import IStateRepository from '@modules/states/repositories/IStatesRepository';
import StateRepository from '@modules/states/infra/typeorm/repositories/StatesRepository';

container.registerSingleton<IStateRepository>(
  'StateRepository',
  StateRepository,
);
