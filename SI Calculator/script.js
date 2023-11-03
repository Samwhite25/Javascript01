function calculateMaturityAmount(){
    const principle=parseFloat(document.getElementById('principle').value);
    const interstRate=parseFloat(document.getElementById('interstRate').value);
     const tenure=parseFloat(document.getElementById('tenure').value);
  
    //Calculations
  
    const maturityAmount=(principle*interstRate*tenure)/100;
  document.getElementById('result').innerText=`Maturity Amount:${maturityAmount.toFixed(2)}`;
  }
  //Eventlistener
  
  document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);