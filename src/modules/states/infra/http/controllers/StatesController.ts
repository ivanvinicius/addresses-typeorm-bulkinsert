import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStateService from '@modules/states/services/CreateStateService';

export default class StatesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createState = container.resolve(CreateStateService);

    const state = await createState.execute(request.body.name);

    return response.json(state);
  }
}
