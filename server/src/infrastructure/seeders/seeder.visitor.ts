import Visitor from "../../domain/entities/visitor.entity";
import visitorRepository from "../repositories/visitor.repository";

class VisitorSeeder {
  private visitors: Array<Visitor> = [];

  public constructor() {
    this.visitors.push(Visitor.create("192.0.0.1", "Mariela", "123456"));
    this.visitors.push(Visitor.create("193.0.0.1", "Patricio", "123455"));
    this.visitors.push(Visitor.create("194.0.0.1", "Leandro", "123465"));
    this.visitors.push(Visitor.create("195.0.0.1", "Gaston", "123123"));
    this.visitors.push(Visitor.create("196.0.0.1", "Luciana", "321321"));
    this.visitors.push(Visitor.create("197.0.0.1", "Javier", "234234"));
    this.visitors.push(Visitor.create("198.0.0.1", "Joaquin", "101010"));
  }

  public async generate(): Promise<void> {
    for (const visitor of this.visitors) {
      await visitorRepository.save(visitor);
    }
  }

}

export default new VisitorSeeder();