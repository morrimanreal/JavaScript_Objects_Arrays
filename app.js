console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
//239

function arraySum(nums) {
  let sum = 0;
  console.log(nums)
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    
  }
  return sum;
}
console.log(arraySum(numbers));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
  title: "Harry Potter",
  pages: 734,
  readCount: 1,
  info() {
    return `${this.title} by J.K Rowling, ${this.pages}, read ${this.readCount} times.`;
  }
}

console.log(book.info())

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
// console.log(sentence);
const words = sentence.split(" ");
// console.log(words)

for (let i=0; i < words.length; i++) {
  const letters = words[i].split("");
  // console.log(letters);
  letters.reverse();
  words[i] = letters.join("");

}

console.log(words);
const result = words.join(" ");
console.log(result)

// EXERCISE 4
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

//make an array to hold all the finalized objects
const resultArray = [];

//1. turn string into an array by separating strings based on "\n"
const rows = csvData.split("\n");
console.log(rows)

//2. Split name,age to make a header, make sure to define the position of the array you want to split from
const headers = rows[0].split(',');
console.log(headers);

//3&4 iterate the remaining array and split the data values by (",")

for (let i = 1; i < rows.length; i++) {
  //define the position of rows[i] to be able to list the values in order
  const values = rows[i].split(",");
  console.log(values);

  //5. create an object for each row (table record) and assign values to name and age
  const table = {
    [headers[0]]: values[0],
    [headers[1]]: values[1]
  }
  //make sure to push or add the newly made objects into an array, make a storage for it too
  resultArray.push(table);
}

console.log(resultArray);