import DislikeClaimCommand from "application/commands/claims/dislike.claim.command";
import claimRepository, {ClaimRepository} from "../../../infrastructure/repositories/claim.repository";
import visitorRepository, {VisitorRepository} from "../../../infrastructure/repositories/visitor.repository";

export class DislikeHandler {

  public constructor(
    private claimRepository: ClaimRepository,
    private visitorRepository: VisitorRepository
  ) {
  }

  public async handle(
    command: DislikeClaimCommand,
  ): Promise<void> {
    const claimId = command.getId();
    const claim = await this.claimRepository.findOneById(claimId);

    if (!claim) {
      throw new Error("Claim does not exist");
    }

    const visitor = await this.visitorRepository.findOneById(command.getVisitorId());

    if (!visitor) {
      throw new Error('Visitor not found');
    }

    if (!visitor.pinMatch(command.getPin())) {
      throw new Error("Invalid PIN");
    }

    claim.dislike(visitor.getId());

    await this.claimRepository.save(claim);
  }
}

export default new DislikeHandler(claimRepository, visitorRepository);
