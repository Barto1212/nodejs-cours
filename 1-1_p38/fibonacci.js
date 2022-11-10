function fibonacci (iterationMax) {
  if (iterationMax === 0) {
    return []
  }
  if (iterationMax === 1) {
    return [0]
  }
  const fibonacciSuite = [0, 1]
  for (let index = 2; index < iterationMax; index++) {
    fibonacciSuite[index] = fibonacciSuite[index - 1] + fibonacciSuite[index - 2]
  }
  return fibonacciSuite
}

export default fibonacci