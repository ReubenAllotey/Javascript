/*  IF AND ELSE statement

if ( condition )
{
block of code 


} else 
{
    block of code 
    
}

*/
// calculating the love score of two people using math.random ();

// prompt(" write  your name ");
// prompt(" write  their name ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
  console.log(
    " you really love each other and your love score is: " + loveScore + "%"
  );
} else if (loveScore < 30 && loveScore <= 70) {
  console.log(" your love score is :" + loveScore + "%");
} else {
  console.log(
    " try again with your love story because your love score is :" +
      loveScore +
      "%"
  );
}

// leap year challenge

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(" leap year ");
      } else {
        console.log(" not leap year ");
      }
    } else {
      console.log(" leap year");
    }
  } else {
    console.log(" not a leap year");
  }
}
