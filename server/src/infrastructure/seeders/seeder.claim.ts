import Category from "../../domain/entities/category.entity";
import Claim from "../../domain/entities/claim.entity";
import Visitor from "../../domain/entities/visitor.entity";
import VisitorRepository from "../../infrastructure/repositories/visitor.repository";
import CategoryRepository from "../../infrastructure/repositories/category.repository";
import claimRepository from "../../infrastructure/repositories/claim.repository";

class ClaimSeeder {
  private claims: Claim[] = [];
  private visitors: Visitor[] = [];
  private categories: Category[] = [];

  public constructor() {
    this.generate();
  }

  public async generate() {
    this.visitors = await VisitorRepository.findAll();
    this.categories = await CategoryRepository.findAll();

    for (const visitor of this.visitors) {
      for (const category of this.categories) {
        this.claims.push(Claim.create(
            visitor,
            'Seeder claim title',
            'Seeder claim description',
            category,
            "San Francisco"
          )
        );
      }
    }

    for (const claim of this.claims) {
      await claimRepository.save(claim);
    }
  }
}

export default new ClaimSeeder();