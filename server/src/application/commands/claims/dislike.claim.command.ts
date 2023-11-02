class DislikeClaimCommand {
  constructor(
    private id: string,
    private visitorId: string,
    private pin: string,
  ) {
    this.id = id;
    this.visitorId = visitorId;
    this.pin = pin;
  }

  public getId(): string {
    return this.id;
  }

  public getVisitorId(): string{
    return this.visitorId;
  }

  public getPin(): string {
    return this.pin;
  }
}

export default DislikeClaimCommand;
