import {Request, Response} from "express";
import CreateClaimCommand from "../../../application/commands/claims/create.claim.command";
import createClaimHandler, {CreateClaimHandler} from "../../../application/handlers/claims/create.claim.handler";

class CreateClaimAction {

  constructor(
    private handler: CreateClaimHandler
  ) {
  }

  public async run(req: Request, res: Response) {
    const {owner, title, description, category, location} = req.body;
    try {
      if (!owner || !title || !description || !category || !location) {
        res.status(400).json({message: "All fields are required"});
        return
      }

      const command = new CreateClaimCommand(
        owner,
        title,
        description,
        category,
        location,
      );
      await this.handler.handle(command);

      res.status(201).json(
        {message: "Claim created sucessfully"}
      );
    } catch (error) {
      const {message} = error as Error;
      res.status(400).json(
        {message: message}
      );
    }

  }
}

export default new CreateClaimAction(createClaimHandler);