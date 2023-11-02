import visitorRepository, {VisitorRepository} from "../../../infrastructure/repositories/visitor.repository";
import claimRepository, {ClaimRepository} from "../../../infrastructure/repositories/claim.repository";
import { LikeClaimCommand } from "../../commands/claims/like.claim.command";

class LikeClaimHandler {
  constructor(
    private readonly claimRepository: ClaimRepository,
    private readonly visitorRepository: VisitorRepository
  ) { }

  public async handle(command: LikeClaimCommand): Promise<void> {
    const id = command.getId();
    const owner = command.getVisitorId();
    const pin = command.getPin();

    const visitor = await this.visitorRepository.findOneById(owner);

    if (!visitor) {
      throw new Error('Visitor not found');
    }

    const claim = await this.claimRepository.findOneById(id);
    if (!claim) {
      throw new Error('Claim not found');
    }

    if (!visitor.pinMatch(pin)) {
      throw new Error('Invalid PIN');
    }

    claim.like(visitor.getId());

    await this.claimRepository.save(claim);
  }
}

export default new LikeClaimHandler(claimRepository, visitorRepository);

