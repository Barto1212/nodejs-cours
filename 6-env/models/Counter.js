import { model, Schema } from "mongoose";

const CounterSchema = new Schema(
  {
    POST: Number,
    GET: Number,
    DELETE: Number,
    PUT: Number,
    id: {
        type: Number,
        default: 0,
        unique: true
    }
  },
  { timestamps: true }
);

export default model("Counter", CounterSchema);
