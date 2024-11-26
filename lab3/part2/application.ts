import { Product, ProductRepository } from './domain';

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  addProduct(product: Product): void {
    this.productRepository.save(product);
  }

  listProducts(): Product[] {
    return this.productRepository.findAll();
  }
}