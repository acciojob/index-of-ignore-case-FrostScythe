function indexOfIgnoreCase(s1, s2) {
  // Edge case: if s2 is empty, return 0
  if (s2.length === 0) return 0;

  // Convert both to lowercase
  let lowerStr = s1.toLowerCase();
  let lowerSub = s2.toLowerCase();

  // Find index
  return lowerStr.indexOf(lowerSub);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
