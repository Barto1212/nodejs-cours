function fibo(n) {
  if (typeof n !== "number") return "error";
  if (typeof n === undefined) return "error";
  if (typeof n === null) return "error";
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

export { fibo };
