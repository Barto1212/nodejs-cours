// let counterVariable = {
//   POST: 0,
//   GET: 0,
//   DELETE: 0,
//   PUT: 0,
// };

import Counter from "../models/Counter.js";

async function counter(req, res, next) {
  const method = req.method;
  const counter = await Counter.find({ id: 0 });
  console.log(counter);
  if (counter.length === 0) {
    const newCounter = new Counter({ [method]: 1 });
    const savedCounter = await newCounter.save();
    console.log(savedCounter);
    next();
  }
  console.log(counter[0][method]);
  if (counter[0][method]) {
    const savedCounter = await Counter.findByIdAndUpdate(counter[0]._id, {
      [method]: counter[0][method] + 1,
    });
    console.log(savedCounter, "add");
    next();
  }
  const savedCounter = await Counter.findByIdAndUpdate(counter[0]._id, {
    [method]: 1,
  });
  console.log(savedCounter);

  next();
}
export default counter;
