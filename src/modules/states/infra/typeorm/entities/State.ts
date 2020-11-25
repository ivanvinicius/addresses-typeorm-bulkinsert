import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('states')
export default class State {
  constructor(props: Omit<State, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
