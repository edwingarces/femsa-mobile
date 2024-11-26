export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

export interface ProductRepository {
  save(product: Product): void;
  findAll(): Product[];
}
