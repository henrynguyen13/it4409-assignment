function rot13(str) {
  let ans = "";
  const length = str.length;
  for (let i = 0; i < length; i++) {
    let num = str[i].charCodeAt();
    if (num >= 65 && num <= 77) {
      ans += String.fromCharCode(num + 13);
    } else if (num >= 78 && num <= 90) {
      ans += String.fromCharCode(num - 13);
    } else {
      ans += str[i];
    }
  }
  return ans;
}

rot13("SERR PBQR PNZC");
