function palindrome(str) {
  str = str.replace(/\s/g, "");
  str = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
  str = str.toLowerCase();
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - i - 1]) {
      return false;
      break;
    }
  }
  return true;
}

palindrome("eye");
