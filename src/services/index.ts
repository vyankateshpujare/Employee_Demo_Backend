import { Application } from '../declarations';
import users from './users/users.service';
import apiEmployee from './api/employee/employee.service';
import departments from './departments/departments.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(apiEmployee);
  app.configure(departments);
}
