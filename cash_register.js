function checkCashRegister(price, cash, cid) {
  //convert to coin unit in order to easy to compare
  let change = cash * 100 - price * 100;
  let cidTotal = 0;
  for (let item of cid) {
    cidTotal += item[1] * 100;
  }
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid };
  } else {
    let ans = [];
    cid = cid.reverse();
    const map = {
      "ONE HUNDRED": 10000,
      TWENTY: 2000,
      TEN: 1000,
      FIVE: 500,
      ONE: 100,
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNY: 1,
    };
    for (let item of cid) {
      let hold = [item[0], 0];
      item[1] = item[1] * 100;
      while (change >= map[item[0]] && item[1] > 0) {
        item[1] -= map[item[0]];
        change -= map[item[0]];
        hold[1] += map[item[0]] / 100;
      }
      if (hold[1] > 0) {
        ans.push(hold);
      }
    }

    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: ans };
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
