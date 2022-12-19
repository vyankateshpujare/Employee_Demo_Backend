import assert from 'assert';
import app from '../../../src/app';

describe('\'api/employee\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/employee');

    assert.ok(service, 'Registered the service');
  });
});
