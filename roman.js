function convertToRoman(num) {
  let ans = "";
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (let roman in romans) {
    const repeatCnt = Math.floor(num / romans[roman]);

    if (repeatCnt !== 0) {
      ans += roman.repeat(repeatCnt);
    }

    num %= romans[roman];

    if (num === 0) return ans;
  }
}

convertToRoman(36);
