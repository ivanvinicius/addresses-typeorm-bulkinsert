import { Repository, getRepository } from 'typeorm';

import ICreateStateDTO from '@modules/states/dtos/ICreateStateDTO';
import IStatesRepository from '@modules/states/repositories/IStatesRepository';
import State from '../entities/State';

export default class StatesRepository implements IStatesRepository {
  private ormRepository: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(State);
  }

  public async findByName(stateName: string): Promise<State | undefined> {
    return this.ormRepository.findOne({ where: { name: stateName } });
  }

  public async create(stateData: ICreateStateDTO): Promise<State | undefined> {
    const state = this.ormRepository.create(stateData);

    await this.ormRepository.save(state);

    return state;
  }
}
