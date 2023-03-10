// Initializes the `api/employee` service on path `/api/employee`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Employee } from './employee.class';
import createModel from '../../../models/employee.model';
import hooks from './employee.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'api/employee': Employee & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/employee', new Employee(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/employee');

  service.hooks(hooks);
}
