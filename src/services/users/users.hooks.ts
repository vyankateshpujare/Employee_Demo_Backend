import * as feathersAuthentication from "@feathersjs/authentication";
import * as local from "@feathersjs/authentication-local";
import { schema } from "./validateUser";
const validate = require("@feathers-plus/validate-joi");
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
    ],
    update: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
      authenticate("jwt"),
    ],
    patch: [
      validate.form(schema, { abortEarly: false }),
      hashPassword("password"),
      authenticate("jwt"),
    ],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
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
