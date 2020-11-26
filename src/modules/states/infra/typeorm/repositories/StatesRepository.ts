import { Repository, getRepository } from 'typeorm';

import ICreateStateDTO from '@modules/states/dtos/ICreateStateDTO';
import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import State from '../entities/State';

export default class StatesRepository implements IStatesRepository {
  private ormRepository: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(State);
  }

  public async createMany(
    statesData: ICreateStateDTO[],
  ): Promise<State[] | undefined> {
    const states = this.ormRepository.create(
      statesData.map(({ name }) => ({ name })),
    );

    await this.ormRepository.save(states);

    return states;
  }
}
