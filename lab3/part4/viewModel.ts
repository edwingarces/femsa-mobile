import { Product } from './model';

export class ProductCatalogViewModel {
  private products: Product[] = [];
  private listeners: (() => void)[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
    this.notifyListeners();
  }

  getProducts(): Product[] {
    return this.products;
  }

  subscribe(listener: () => void): void {
    this.listeners.push(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}
