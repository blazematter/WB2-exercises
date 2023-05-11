//define a function
function logNickname() {
  let nickname = "";
  console.log(nickname);
}

//run a function
logNickname();

function calculateTip(bill, tipPercentage) {
  let tip = bill * tipPercentage;
  let total = bill + tip;
  let message =
    "The tip on a " +
    bill +
    " food bill is " +
    tip.toFixed(2) +
    " for a total of $" +
    total.toFixed(2);

  return message;
}

console.log(calculateTip(13.0, 0.18));

let billMessage = calculateTip(45.0, 0.12);
console.log(billMessage);

let tip = "Don't walk into the street without looking two ways.";
console.log(tip);

function drinking(userAge, isFriend) {
  let minDrinkingAge = 21;
  let isDrinkingAge = userAge >= minDrinkingAge;
  // either true or false
  let result;

  if (isDrinkingAge && isFriend) {
    result = "Congratulations: You have been invited to our Autumn Bar Crawl!";
  } else {
    result = "Sorry, but you're either too young or we don't really know you.";
  }

  return result;
}

console.log(drinking(21, false));

function generateInvite(userAge, minDrinkingAge, name) {
  let isDrinkingAge = userAge >= minDrinkingAge;
  let isFriend = getFriendshipStatus(name); // either true or false

  if (isDrinkingAge && isFriend) {
    message = "Congratulations: You have been invited to our Autumn Bar Crawl!";
  } else {
    message = "Sorry, but you're either too young or we don't really know you.";
  }

  return message;
}
