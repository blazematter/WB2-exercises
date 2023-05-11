

function parseAndDisplayName(fullName) {
  let firstName = fullName.split(" ")[0];
  let lastName = fullName.split(" ")[1];
   
    console.log("Name : "+ fullName);
    console.log("First Name: "+ firstName);
    console.log("Last Name: "+lastName);
}
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");

//console.log(firstName);



//let firstName = name.indexOf()

// write an empty function and name it parseAndDisplayName
//Give the function a parameter named fullName
// use let spacePosition = fullName.indexOf(" ");
// - index is the word we use for the position or location of a char within a string
// get the substring to the left of the spacePosition
// - use a build in string function to get the substring starting at position (index) 0 up to but not including the spacePosition. 
// - substring or slice 
// get the substring to the right of the spacePos
//- use a built in string function to get the substring starting at the spacePosition up to the end of the string
// - use  a built in string function to get the substring starting at the 'spacePos +1' up to the end of the string
// - assign this substring to a variable named 'lastName'
// use 'console.log()' to display the first name and last name on the console.
// - once working, consider displaying these on the PAGE for the user, using innerHTML?