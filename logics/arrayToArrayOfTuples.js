// PROBLEM: Array of any data type to the array of the tuples of that data type

const FRUITS = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Watermelon",
  "Grapes",
];

// approach 1: using loop

const temp1 = [];
let temp1Index = -1;

FRUITS.forEach((item, index) => {
  if (index % 2 === 0) {
    temp1Index++;
    temp1[temp1Index] = [];
  }
  temp1[temp1Index].push(item);
});

// approach 2: using reduce but same logic

const temp2 = FRUITS.reduce((acc, item, index) => {
  if (index % 2 === 0) acc.push([]); // Start a new tuple
  acc[acc.length - 1].push(item); // Add item to the last tuple
  return acc;
}, []);
