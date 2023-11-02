import Visitor from "../../domain/entities/visitor.entity";

class VisitorRepository {
  private visitors: Visitor[];

  public constructor() {
    this.visitors = [];
  }

  async save(visitor: Visitor): Promise<void> {
    const savedVisitor = this.visitors.find(u => u.getId() === visitor.getId())
    if (savedVisitor) {
      this.visitors.splice(this.visitors.indexOf(savedVisitor), 1)
    }
    this.visitors.push(visitor);
  }

  async findOneById(id: string): Promise<Visitor | null> {
    const visitor = this.visitors.find(u => u.getId() === id);
    return (visitor) ? visitor : null;
  }

  async findAll(): Promise<Visitor[]> {
    const visitors = this.visitors;
    return visitors;
  }

}

export { VisitorRepository };
export default new VisitorRepository();