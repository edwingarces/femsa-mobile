import { Product, ProductRepository } from './domain';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  save(product: Product): void {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}