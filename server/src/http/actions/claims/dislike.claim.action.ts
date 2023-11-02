import {Request, Response} from 'express';
import DislikeClaimCommand from '../../../application/commands/claims/dislike.claim.command';
import dislikeHandler, {DislikeHandler} from "../../../application/handlers/claims/dislike.handler";

class DislikeClaimAction {
  constructor(private handler: DislikeHandler) {
  }

  public async run(req: Request, res: Response) {
    const {id, claimId, pin} = req.body;

    try {
      if (!claimId || !pin) {
        res.status(400).json({message: 'Claim ID and PIN are required'});
        return
      }

      const command = new DislikeClaimCommand(claimId, id, pin);

      await this.handler.handle(command);

      res.status(200).json({message: 'Disliked successfully'});
    } catch (error) {
      const {message} = error as Error;
      res.status(400).json({message});
    }
  }
}

export default new DislikeClaimAction(dislikeHandler);
