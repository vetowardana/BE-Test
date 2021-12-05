/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const myNumber = numbers.sort((num1, num2)=>{
    return num1 - num2;
  });
  for (let i = 0; i < myNumber.length; i++){
    if(i !== myNumber[i]){
      return i;
    }
  }
}

console.log(result(numbers));
