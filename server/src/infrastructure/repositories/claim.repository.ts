import Claim from "../../domain/entities/claim.entity";

export class ClaimRepository {
  private claims: Claim[];

  public constructor() {
    this.claims = [];
  }

  public async save(claim: Claim): Promise<void> {
    const saveClaim = this.getActiveClaims().find((a) => a.getId() === claim.getId());
    if (saveClaim) {
      this.claims.splice(this.claims.indexOf(saveClaim), 1);
    }
    this.claims.push(claim);
  }

  public async findOneById(id: string): Promise<Claim | null> {
    const claim = this.getActiveClaims().find((a) => a.getId() === id);
    return claim ? claim : null;
  }

  public async findLast5Claims(): Promise<Claim[]> {
    return this.getActiveClaims().sort((a, b) => {
      return b.createAt.getTime() - a.createAt.getTime();
    }).slice(0, 5);
  }

  public async lastFiveOnFireInLastHour(): Promise<Claim[]> {
    const now = new Date();
    const oneHourAgo = new Date(now);
    oneHourAgo.setHours(now.getHours() - 1);

    return this.getActiveClaims().filter((claim) =>
      claim.createAt > oneHourAgo
    )
      .sort((a, b) => b.getLikes() - a.getLikes())
      .slice(0, 5);

  }

  private getActiveClaims(): Array<Claim> {
    return this.claims.filter(c => !c.cloneOf);
  }
}

export default new ClaimRepository();
