// maths.random () is javascript function used to generate random numbers

// generation numbers by a dice

var n = Math.random(); // 0 - 0.99999999999999
n = n * 6; // 0 - 5.99999999999
n = Math.floor(n) + 1;
console.log(n);

// calculating the love score of two people using math.random ();

// prompt(" write  your name ");
// prompt(" write  their name ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(" your love score is " + loveScore);
