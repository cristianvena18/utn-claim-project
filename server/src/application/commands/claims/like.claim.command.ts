export class LikeClaimCommand {
  private readonly id: string;
  private readonly visitorId: string;
  private readonly pin: string;

  constructor(
    id: string,
    owner: string,
    pin: string
  ) {
    this.id = id;
    this.visitorId = owner;
    this.pin = pin;
  }

  public getId(): string {
    return this.id;
  }

  public getVisitorId(): string {
    return this.visitorId;
  }

  public getPin(): string {
    return this.pin;
  }

}