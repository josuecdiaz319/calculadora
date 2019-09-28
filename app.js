
window.onload = function()
{

  let firstValue
  let secondValue
  let selectedOperator

  const display = document.getElementById("display");
  const btnMC = document.getElementById("btnMC");
  const btnMadd = document.getElementById("btnMadd");
  const btnMsub = document.getElementById("btnMsub");
  const btnDiv = document.getElementById("btnDiv");
  const btnSeven = document.getElementById("btnSeven");
  const btnEight = document.getElementById("btnEight");
  const btnNine = document.getElementById("btnNine");
  const btnMult = document.getElementById("btnMult");
  const btnFour = document.getElementById("btnFour");
  const btnFive = document.getElementById("btnFive");
  const btnSix = document.getElementById("btnSix");
  const btnSub = document.getElementById("btnSub");
  const btnOne = document.getElementById("btnOne");
  const btnTwo = document.getElementById("btnTwo");
  const btnThree = document.getElementById("btnThree");
  const btnAdd = document.getElementById("btnAdd");
  const btnC = document.getElementById("btnC");
  const btnZero = document.getElementById("btnZero");
  const btnPoint = document.getElementById("btnPoint");
  const btnEqual = document.getElementById("btnEqual");

  const numberOnclick = function(event){
    display.innerText += event.target.textContent;
  }

  btnOne.onclick = numberOnclick
  btnTwo.onclick = numberOnclick
  btnThree.onclick = numberOnclick
  btnFour.onclick = numberOnclick
  btnFive.onclick = numberOnclick
  btnSix.onclick = numberOnclick
  btnSeven.onclick = numberOnclick
  btnEight.onclick = numberOnclick
  btnNine.onclick = numberOnclick
  btnZero.onclick = numberOnclick

  btnC.onclick = function()
  {
    display.innerText = "";
  }

  const operatorFunc = function()
  {
    firstValue = parseFloat(display.innerText)
    display.innerText = ""
    selectedOperator = event.target.textContent
    //console.log(firstValue)
    //console.log(selectedOperator)
  }

  btnDiv.onclick = operatorFunc
  btnMult.onclick = operatorFunc
  btnSub.onclick = operatorFunc
  btnAdd.onclick = operatorFunc

  btnEqual.onclick = function(event)
  {
    secondValue = parseFloat(display.innerText)
    let result

    const options = {
      baseURL: "http://localhost:3000/",
      timeout: 5000,
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }

    switch(selectedOperator)
    {
      case '+':
        fetch(`http://localhost:3000/add/${firstValue}/${secondValue}`, options)
        .then(res => res.json())
        .then((response) => {
          console.log(response);
          display.innerText = response.result;
        })
        break
      case '-':
        fetch(`http://localhost:3000/sub/${firstValue}/${secondValue}`, options)
        .then(res => res.json())
        .then((response) => {
          console.log(response);
          display.innerText = response.result;
        })
        break
      case '*':
        fetch(`http://localhost:3000/mul/${firstValue}/${secondValue}`, options)
        .then(res => res.json())
        .then((response) => {
          console.log(response);
          display.innerText = response.result;
        })
        break
      case '/':
        fetch(`http://localhost:3000/div/${firstValue}/${secondValue}`, options)
        .then(res => res.json())
        .then((response) => {
          console.log(response);
          display.innerText = response.result;
        })
        break;
    }

  }

}
