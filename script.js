function hasKey(key) {
  //   write your code here
	return key in sampleObject;
}

const sampleObject = {
	red: "#FF0000",
	green: "#00FF00",
	white: "#FFFFFF"
}

console.log(hasKey("red"));
console.log(hasKey("blue"));
console.log(hasKey("white"));

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
