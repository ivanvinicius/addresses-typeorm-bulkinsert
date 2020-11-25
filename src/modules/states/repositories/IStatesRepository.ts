import ICreateStateDTO from '@modules/states/dtos/ICreateStateDTO';
import State from '../infra/typeorm/entities/State';

export default interface IStatesRepository {
  // findById(): Promise<State | undefined>;
  findByName(name: string): Promise<State | undefined>;
  create(data: ICreateStateDTO): Promise<State | undefined>;
}
