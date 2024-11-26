import { ProductCatalogViewModel } from './viewModel';

export class ProductCatalogView {
  constructor(private viewModel: ProductCatalogViewModel) {
    this.viewModel.subscribe(() => this.render());
  }

  render(): void {
    console.log("Product Catalog:", this.viewModel.getProducts());
  }
}