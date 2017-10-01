const express = require('express')
const app = express()

//Server
app.get('/', function (req, res) {
  res.send('The sum of all the multiples of 3 and 5 below 1000 is ' + y)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// Problem Solving Function, aka PSF
y = 0;  //global variable to hold the sum of our multiples

for(x = 1;x < 1000;x++){
  if(x % 3 === 0){    //use the modulo function to check to see if a remainder is 0, indicating the number is a multiple of 3
    console.log(x);
    y = y + x;  //add our multiples into our global variable
  } else if(x % 5 === 0){ //use the modulo to do the same for multiples of 5. also use else if to prevent doubling numbers (numbers that are multiples of 3 and 5)
    console.log(x);
    y = y + x;  //same as above
  }
}

console.log('the sum of all multiples is ' + y);  //log our answer
