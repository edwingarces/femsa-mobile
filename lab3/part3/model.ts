export class UserService {
  private users = [{ username: "user", password: "pass" }];

  authenticate(username: string, password: string): boolean {
    return this.users.some(
      (user) => user.username === username && user.password === password
    );
  }
}