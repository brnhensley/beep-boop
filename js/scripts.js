  //  Business Logic
      //  Normal
function boopNumber(inputNumberString) {
  var userNumber = parseInt(inputNumberString);
  var arrayNumbers = [];
  console.log(userNumber);
  console.log(typeof userNumber);
  console.log(typeof inputNumberString);
  if (userNumber === 666) {
    $("#satan").show();
  }
  for (var i = 0; i <= userNumber; i++) {
    if (i === 666) {
      arrayNumbers.push(i + " Hail Satan! " + i + ", ");
    } else if (String(i).includes("3")){
      arrayNumbers.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (String(i).includes("2")){
      arrayNumbers.push("Boop! ");
    } else if (String(i).includes("1")){
      arrayNumbers.push("Beep! ");
    } else {
      arrayNumbers.push(i + ", ");
    }
  }
  return arrayNumbers.join("");
}

      //  Reverse
function boopReverse(inputNumberString) {
  var userNumber = parseInt(inputNumberString);
  var arrayNumbers = [];
  console.log(userNumber);
  console.log(typeof userNumber);
  console.log(typeof inputNumberString);
  if (userNumber === 666) {
    $("#reverseSatan").show();
  }
  for (var i = 0; i <= userNumber; i++) {
    if (i === 666) {
      arrayNumbers.unshift(i + " !nataS liaH " + i + ", ");
    } else if (String(i).includes("3")){
      arrayNumbers.unshift(".taht od t'nac I diarfa m'I .evaD ,yrros m'I ");
    } else if (String(i).includes("2")){
      arrayNumbers.unshift("!pooB ");
    } else if (String(i).includes("1")){
      arrayNumbers.unshift("!peeB ");
    } else {
      arrayNumbers.unshift(i + ", ");
    }
  }
  return arrayNumbers.join("");
}

  //  User Logic
      //  Normal submit
$(function() {
  $("form#beepboop").submit(function(event) {
    event.preventDefault();
    $("#satan").hide();
    var inputNumberString = $("#inputNumber").val();
    var output = boopNumber(inputNumberString);
    $("#output").text(output);
  });
});
      //  Reverse submit
$(function() {
  $("form#reverse").submit(function(event) {
    event.preventDefault();
    $("#satan").hide();
    var inputNumberString = $("#inputReverseNumber").val();
    console.log(inputNumberString);
    var output = boopReverse(inputNumberString);
    $("#output").text(output);
  });
});
