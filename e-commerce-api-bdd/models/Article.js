import { model, Schema } from "mongoose";

const ArticleSchema = new Schema(
  {
    label: {
      type: String,
      require: true,
    },
    description: String,
    price: {
      type: Number,
      default: 10000,
    },
  },
  { timestamps: true }
);

export default model("Article", ArticleSchema);
