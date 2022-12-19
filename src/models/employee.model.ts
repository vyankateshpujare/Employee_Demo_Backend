// api/employee-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";
const departmentSchema = require("./departmentSchema");

export default function (app: Application): Model<any> {
  const modelName = "employee";
  const mongooseClient: Mongoose = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true,
      },
      department: {
        type: departmentSchema(app),
        required: true,
      },

      salary: {
        type: Number,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, schema);
}
