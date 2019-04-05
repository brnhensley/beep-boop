  //  Business Logic

for (var i = 1; i <= userInput; i++) {
  if (i === 666) {
    console.log("Hail Satan!")
  } else if ((i % 3 === 0) && (i % 5 === 0)){
    console.log("I'm sorry, Dave. I'm afraid I can't do that")
  } else if (i % 3 === 0){
    console.log("Boop!")
  } else if (i % 5 === 0){
    console.log("Beep!")
  } else
  console.log(i);
}

  //  User Logic

$(function() {
  event.preventDefault():
  var userInput = $("#inputNumber").val();
  var output = boopIt(userInput);
  $("#output").text(output);
}
