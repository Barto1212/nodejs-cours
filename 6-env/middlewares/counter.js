import Counter from "../models/Counter.js";

async function counter(req, res, next) {
  const method = req.method;
  const counter = await Counter.find({ id: 0 });
  if (counter.length === 0) {
    const newCounter = new Counter({ [method]: 1 });
    const savedCounter = await newCounter.save();
    console.log(savedCounter);
    next();
  }
  const count = counter[0];
  console.log(count);
  if (count[method]) {
    const savedCounter = await Counter.findOneAndUpdate(
      { _id: count._id },
      {
        GET: 2,
      }
    );
    console.log(savedCounter);
    next();
  }
  const savedCounter = await Counter.findByIdAndUpdate(count._id, {
    [method]: 1,
  });
  next();
}
export default counter;
