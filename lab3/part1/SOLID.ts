interface TotalCalculator {
  calculate(items: CartItem[]): number;
}

interface CheckoutProcessor {
  process(total: number): void;
}

class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  getItems(): CartItem[] {
    return this.items;
  }
}

class SimpleTotalCalculator implements TotalCalculator {
  calculate(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}

class ConsoleCheckoutProcessor implements CheckoutProcessor {
  process(total: number): void {
    console.log("Processing payment for total:", total);
  }
}

class ShoppingCartService {
  constructor(
    private cart: ShoppingCart,
    private totalCalculator: TotalCalculator,
    private checkoutProcessor: CheckoutProcessor
  ) {}

  checkout(): void {
    const total = this.totalCalculator.calculate(this.cart.getItems());
    this.checkoutProcessor.process(total);
  }
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}