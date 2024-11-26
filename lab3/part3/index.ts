import { UserService } from './model';
import { LoginPresenter } from './presenter';
import { ConsoleLoginView } from './view';

const userService = new UserService();
const loginView = new ConsoleLoginView();
const presenter = new LoginPresenter(userService, loginView);

presenter.login("user", "pass");