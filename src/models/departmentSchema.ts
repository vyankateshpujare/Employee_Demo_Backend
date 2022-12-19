import { Application } from "@feathersjs/express";
import { Model, Mongoose } from "mongoose";
module.exports = function (app: Application) {
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
      },
      updatedAt: {
        type: Date,
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
