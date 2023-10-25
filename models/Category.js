import mongoose, { model, Schema, models } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    properties: [
      {
        name: { type: String, required: true },
        values: [{ type: String }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Category = models?.Category || model("Category", CategorySchema);
