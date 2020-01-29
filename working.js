var name = "Sammy";
var spartans = 300;
var kingdoms  = ["mammals","birds","fish"];
console.log(spartans);

var password = "hunter2";

console.log(password);

password = "hunter3";
console.log(password);

// This is a comment

console.log(typeof variable); // Output: undefined
//console.log(variable);

const pwd = "tl1";
console.log(pwd);
//pwd = "tl2";
console.log(pwd);

// Initialize a Global Variable

//var species = "human";
//console.log(species);


function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}

transform();
//console.log(species);

var fullMoon = true;

// Initiaize a global variable
let species = "human";

if (fullMoon) {
	// Initialize a block-scoped variable
	let species = "werewolf";
	console.log(`It is a full moon. Lupin is currently a ${species}.`);
}

