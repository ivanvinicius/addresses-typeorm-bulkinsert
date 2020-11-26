import { injectable, inject } from 'tsyringe';

import State from '../infra/typeorm/entities/State';
import IStatesRepository from '../repositories/IStatesRepository';

interface IRequest {
  name: string;
}

@injectable()
export default class CreateStateService {
  constructor(
    @inject('StatesRepository')
    private stateRepository: IStatesRepository,
  ) {}

  public async execute(
    states: IRequest[],
  ): Promise<State | State[] | undefined> {
    return this.stateRepository.createMany(states);
  }
}
