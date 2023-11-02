import Category from "../../domain/entities/category.entity";
import categoryRepository from "../repositories/category.repository";

class CategorySeeder {
  private categories: Array<Category> = [];

  public constructor() {
    this.categories.push(Category.create("First category", "#26577C"));
    this.categories.push(Category.create("Second category", "#E55604"))
    this.categories.push(Category.create("Third category", "#B4B4B3"))
    this.categories.push(Category.create("Fourth category", "#EBE4D1"))
  }

  public async generate(): Promise<void> {
    for (const category of this.categories) {
      await categoryRepository.save(category);
    }
  }
}

export default new CategorySeeder();