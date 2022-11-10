import assert from "node:assert/strict";
import fibonacci from "./fibonacci.js";

const fiboTheorique = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

const size = fiboTheorique.length;

const fiboReel = fibonacci(size);

try {
  for (let i in fiboTheorique) {
    assert.equal(fiboReel[i], fiboTheorique[i]);
  }
  console.log("test vérifié");
} catch (error) {
  console.log(error);
}
