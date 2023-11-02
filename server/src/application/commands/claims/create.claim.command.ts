class CreateClaimCommand {
  private readonly owner: string;
  private readonly title: string;
  private readonly description: string;
  private readonly category: string;
  private readonly location: string;

  constructor(
    owner: string,
    title: string,
    description: string,
    category: string,
    location: string,
  ) {
    this.owner = owner;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
  }

  public getOwner(): string{
    return this.owner;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCategory(): string{
    return this.category;
  }

  public getLocation(): string {
    return this.location;
  }
}

export default CreateClaimCommand;
