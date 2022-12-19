import { HooksObject } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";
import { schema } from "./validateDept";
import { fetchUpdatedTime } from "./hooks/fetchUpdatedTime";
const validate = require("@feathers-plus/validate-joi");

// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    update: [authenticate("jwt"), validate.form(schema, { abortEarly: false })],
    patch: [],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [fetchUpdatedTime()],
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
