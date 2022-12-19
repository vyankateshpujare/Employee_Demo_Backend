import assert from 'assert';
import app from '../../src/app';

describe('\'departments\' service', () => {
  it('registered the service', () => {
    const service = app.service('departments');

    assert.ok(service, 'Registered the service');
  });
});
