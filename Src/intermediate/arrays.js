var guestList = ["angela", "Reuben", "Joseph ", " Diana "];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[1]);
console.log(guestList.includes("Reuben"));

guestList.push(); // adding new items to the array component

console.log(guestList);
guestList.pop("Emmanuel "); // takes away last element from the array
console.log(guestList);

var output = [];
var count = 1;
" Kelvin", " Emmanuel ";

function fizBuzz() {
  output.push(count);
  count = count + 1;

  if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push(" Buzz");
  } else if (count % 3 === 0 && count % 5 === 0) {
    output.push(" FizzBuzz");
  }

  console.log(output);
}
fizBuzz();
fizBuzz();
fizBuzz();
fizBuzz();
fizBuzz();
fizBuzz();
fizBuzz();
fizBuzz();

// buy lunch challenge

var friends = [
  "angela",
  "Reuben",
  "Joseph ",
  " Diana ",
  " Kelvin",
  " Emmanuel ",
];
function buyLunch(friends) {
  var randomPerson = friends.length;
  var randomPersonPosition = Math.floor(Math.random() * randomPerson);
  var personBuyLunch = friends[randomPersonPosition];
  console.log(personBuyLunch + "  will buy the lunch for his friends");
}

buyLunch(friends);
