import { container } from 'tsyringe';

import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import StatesRepository from '@modules/states/infra/typeorm/repositories/StatesRepository';

container.registerSingleton<IStatesRepository>(
  'StatesRepository',
  StatesRepository,
);
