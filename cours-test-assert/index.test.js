import { fibo } from "./fibo.js";
import { strict } from "node:assert";
function fiboTheorique(n) {
  const suiteFiboWiki = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
  ];

  return suiteFiboWiki.splice(0, n + 1);
}
try {
  const n = 16;
  for (let i = 0; i < n; i++) {
    strict.deepEqual(fibo(i), fiboTheorique(i));
  }
  console.log("test passé avec succés");
} catch (error) {
  console.log(error);
}
