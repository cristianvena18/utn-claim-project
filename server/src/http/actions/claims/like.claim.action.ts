import { Request, Response } from "express";
import { LikeClaimCommand } from "../../../application/commands/claims/like.claim.command";
import LikeHandler from "../../../application/handlers/claims/like.claim.handler";

class LikeClaimAction {
  async run(req: Request, res: Response) {
    const { id, owner, pin } = req.body;

    try {
      const command = new LikeClaimCommand(id, owner, pin);
      if (!id || !pin) {
        res.status(400).json({ message: 'Claim ID and PIN are required' });
        return
      }

      await LikeHandler.handle(command);

      res.status(200).json({ message: "Like added" });
    } catch (error) {
      const { message } = error as Error;
      res.status(400).json({ message: message });
    }
  }
}

export default new LikeClaimAction();
