import {Request, Response} from 'express';
import {ReportDuplicateClaimCommand} from "../../../application/commands/claims/report-duplicate.claim.command";
import reportDuplicateClaimHandler, {ReportDuplicateClaimHandler} from "../../../application/handlers/claims/report-duplicate.claim.handler";

export class ReportDuplicateClaimAction {

  constructor(
    private handler: ReportDuplicateClaimHandler,
  ) {
  }

  public async run(req: Request, res: Response): Promise<void> {
    const {id} = req.params;
    const {originalId} = req.body;

    if (!originalId || !id) {
      res.status(400).json({message: 'originalId is required'});
      return;
    }

    try {
      const command = new ReportDuplicateClaimCommand(id, originalId);

      await this.handler.handle(command);

      res.status(200).json({message: 'claim reported'});

    } catch (e: any) {
      res.status(400).json({message: e.message})
    }


  }
}

export default new ReportDuplicateClaimAction(reportDuplicateClaimHandler)