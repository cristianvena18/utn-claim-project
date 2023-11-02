import {Request, Response} from 'express';
import CreateVisitorCommand from '../../../application/commands/visitors/create.visitor.command';
import createVisitorHandler, {
  CreateVisitorHandler
} from '../../../application/handlers/visitors/create.visitor.handler';

class createVisitorAction {

  constructor(
    private handler: CreateVisitorHandler
  ) {
  }

  public async run(req: Request, res: Response) {
    const {ip, nickname, pin} = req.body;

    try {
      if (!ip || !nickname) {
        res.status(400).json({message: "All fields are required"});
        return
      }

      const command = new CreateVisitorCommand(
        ip,
        nickname,
        pin
      );

      await this.handler.handle(command);

      res.status(201).json(
        {message: 'Visitor create sucessfully'}
      );
    } catch (error) {
      const {message} = error as Error;
      res.status(400).json(
        {message: message}
      );
    }
  }
}

export default new createVisitorAction(createVisitorHandler);
