export class ReportDuplicateClaimCommand {

  constructor(
    private id: string,
    private originalId: string
  ) {
  }

  public getId(): string {
    return this.id;
  }

  public getOriginalId(): string {
    return this.originalId;
  }
}