function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 if (subStr.length === 0) return 0;

  // Convert both to lowercase
  let lowerStr = str.toLowerCase();
  let lowerSub = subStr.toLowerCase();

	return lowerStr.indexOf(lowerSub);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
