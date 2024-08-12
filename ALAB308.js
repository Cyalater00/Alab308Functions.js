// === Part 1 === //

// write functions that accomplish the following:
// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// == Take an array of numbers and return the sum. == //
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// == Take an array of numbers and return the average. == //
function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const totalSum = sum(numbers);
  return totalSum / numbers.length;
}

// == Take an array of strings and return the longest string. == //
function longestString(strings) {
  return strings.reduce(
    (longest, str) => (str.length > longest.length ? str : longest),
    ""
  );
}

// == Take an array of strings, and a number and return an array of the strings that are == //
function stringsLongerThan(strings, length) {
  return strings.filter((str) => str.length > length);
}

function printToN(n, current = 1) {
  if (current > n) return;
  console.log(current);
  printToN(n, current + 1);
}



