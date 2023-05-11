function parseAndDisplayName(fullName) {
  let firstSpacePosition = fullName.indexOf(" ");
  let lastSpacePosition = fullName.lastIndexOf(" ");

  let noSpaceFound = firstSpacePosition === -1;
  let isTwoWordName = firstSpacePosition === lastSpacePosition;

  let firstName = fullName.slice(0, firstSpacePosition);
  let lastName = fullName.slice(firstSpacePosition + 1);
  let middleName = fullName.slice(firstSpacePosition + 1, lastSpacePosition);
  //let noSpaceFound = spacePosition === -1
  if (noSpaceFound) {
    // one word name
    console.log(`Name: ${fullName}`);
  } else if (isTwoWordName) {
    console.log(
      `Name: ${fullName}\nFirst Name: ${firstName}\nLast Name: ${lastName}`
    );
  } else {
    lastName = fullName.slice(lastSpacePosition + 1);
    console.log(
      `Name: ${fullName}\nFirst Name: ${firstName}\nMiddle name: ${middleName}\nLast Name: ${lastName}`
    );
    // third-word name
  }

  //let lastName = fullName.substring()

  //console.log("Last Name: "+lastName);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");



//starting add one

for(let step = -10; step <5; step++) {
  //runes 5 times, with values of step 0 through 4.
  console.log("Walking east one step: " + step);
}

for (let count = 0; count < 10; count += 10) {
  console.log("swag to 100")
}

let person = {
    first: "Grace",
    last: "Hopper",
    branch: "United States Navy",
    rank: "Rear Admiral(lower half)",
    language: ["FLOW-MATIC","COBOL"]
}