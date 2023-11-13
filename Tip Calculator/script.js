

function calculateTip(){
  //get the input type values
  const billAmount=parseFloat(document.getElementById("bill-amount").value);
  const tipPercentage=parseFloat(document.getElementById("tip-percentage").value);

  //calculate the tip and total amount
  const tipAmount=billAmount*(tipPercentage/100);
  const totalAmount=tipAmount+billAmount;

  //display the results
  document.getElementById("tip-amount").textContent=`$`+tipAmount;
  document.getElementById("total-amount").textContent=`$`+totalAmount.toFixed(2);

}


