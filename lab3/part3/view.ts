export interface LoginView {
  showSuccess(): void;
  showError(): void;
}

export class ConsoleLoginView implements LoginView {
  showSuccess(): void {
    console.log("Login successful!");
  }

  showError(): void {
    console.log("Login failed!");
  }
}
