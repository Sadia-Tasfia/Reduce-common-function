/* 
SAME AS BANK PROJECT
1. get the element by id
2. get the value from the element
3. convert string value to a number
*/  

document.getElementById("btn-deposit").addEventListener('click',function(){
  const newDepositAmount = getInputValueById("deposit-field");

  // 1. get previous deposit total by id
  const previousDepositTtotal = getTextElementById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTtotal + newDepositAmount;

  // set deposit total value
  setElementValueById("deposit-total", newDepositTotal);

  // get previous balance
  const previousBalanceTotal = getTextElementById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setElementValueById("balance-total", newBalanceTotal);
});