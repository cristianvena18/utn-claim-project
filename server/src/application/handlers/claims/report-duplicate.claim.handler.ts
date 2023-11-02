import claimRepository, {ClaimRepository} from "../../../infrastructure/repositories/claim.repository";
import {ReportDuplicateClaimCommand} from "../../commands/claims/report-duplicate.claim.command";

export class ReportDuplicateClaimHandler {

  constructor(
    private claimRepository: ClaimRepository,
  ) {
  }

  public async handle(command: ReportDuplicateClaimCommand): Promise<void> {

    const duplicatedClaim = await this.claimRepository.findOneById(command.getId());

    if (!duplicatedClaim) {
      throw new Error('Claim not found');
    }

    const originalClaim = await this.claimRepository.findOneById(command.getOriginalId());

    if (!originalClaim) {
      throw new Error('Claim not found');
    }

    duplicatedClaim.report(originalClaim);
  }
}

export default new ReportDuplicateClaimHandler(claimRepository)