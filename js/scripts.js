  //  Business Logic

function boopNumber(userInput) {
  var userNumber = parseInt(userInput);
  var arrayNumbers = [];

  console.log(userInput);
  for (var i = 0; i <= userInput; i++) {
    if (i === 666) {
      console.log(i);
      arrayNumbers.push(i + " <strong>Hail Satan!</strong> " + i + ", ");
    } else {
      arrayNumbers.push(i + ", ");
    }
  }
  return arrayNumbers.join("");
}

  // if (i === 666) {
    //   console.log("Hail Satan!")
   // else if ((i % 3 === 0) && (i % 5 === 0)){
//     console.log("I'm sorry, Dave. I'm afraid I can't do that")
//   } else if (i % 3 === 0){
//     console.log("Boop!")
//   } else if (i % 5 === 0){
//     console.log("Beep!")
//   } else
//   console.log(i);
// }

  //  User Logic


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    console.log(userInput);
    var userInput = $("#inputNumber").val();
    var output = boopNumber(userInput);
    $("#output").text(output);
    // console.log(output);
  });
});
