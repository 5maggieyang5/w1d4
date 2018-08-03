var countdownGenerator = function (x) {
  /* your code here */
  var startNumb = x;

  return function (){

    if (startNumb > 0) {
      console.log("T-minus" + startNumb +"...");
    } else if (startNumb === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    startNumb -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!