/* while loops
 while ( condition){
 block of code 
 
 }


*/
var outPut = [];
var count = 1;
function fizzBuzz() {
  while (count <= 30) {
    if (count % 3 === 0 && count % 5 === 0) {
      outPut.push("FizzBuzz");
    } else if (count % 3 === 0) {
      outPut.push("Fizz ");
    } else if (count % 5 === 0) {
      outPut.push("Buzz");
    } else {
      outPut.push(count);
    }
    count++;
  }
  console.log(outPut);
}
