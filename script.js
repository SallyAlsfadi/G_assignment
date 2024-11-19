function SumAndAverage(numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  const average = total / numbers.length;
  return { total, average };
}
const numbers = [10, 20, 30, 40, 50];
const result = SumAndAverage(numbers);
console.log(`Total: ${result.total}, Average: ${result.average}`);
