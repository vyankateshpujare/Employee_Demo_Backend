import { HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";
import { schema } from "./validateEmployee";
const validate = require("@feathers-plus/validate-joi");
import { fetchDepartment } from "./hooks/fetchDepartnent";
import { incrementSalary } from "./hooks/incrementSalary";

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchDepartment(),
    ],
    update: [
      authenticate("jwt"),
      validate.form(schema, { abortEarly: false }),
      fetchDepartment(),
    ],
    patch: [authenticate("jwt"), incrementSalary()],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
