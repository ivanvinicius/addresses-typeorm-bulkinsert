import ICreateStateDTO from '@modules/states/dtos/ICreateStateDTO';
import State from '../infra/typeorm/entities/State';

export default interface IStatesRepository {
  createMany(statesData: ICreateStateDTO[]): Promise<State[] | undefined>;
}
