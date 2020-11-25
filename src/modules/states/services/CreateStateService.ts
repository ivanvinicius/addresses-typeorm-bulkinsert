import { injectable, inject } from 'tsyringe';

import State from '../infra/typeorm/entities/State';
import IStatesRepository from '../repositories/IStatesRepository';

@injectable()
export default class CreateStateService {
  constructor(
    @inject('StateRepository')
    private stateRepository: IStatesRepository,
  ) {}

  public async execute(name: string): Promise<State | undefined> {
    const checkStateExists = await this.stateRepository.findByName(name);

    if (checkStateExists) {
      throw new Error('The state is already registered');
    }

    return this.stateRepository.create({ name });
  }
}
