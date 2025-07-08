let currentNumber=document.querySelector(".current-number-entiry");
let numbers = document.querySelectorAll(".number");
numbers.forEach(function (el){
  el.addEventListener("click", function(){
    let num = this.innerText;
    if(num === '.' && currentNumber.textContent.includes('.')) return;
    currentNumber.textContent += num;
  })
});

let del = document.querySelector('.del');
del.addEventListener("click", function(){
  currentNumber.textContent = currentNumber.textContent.slice(0, -1);
});

let ac = document.querySelector('.ac');
ac.addEventListener("click", function(){
  currentNumber.textContent="";
});
let operands = document.querySelectorAll('.operand');
let prevNumber = document.querySelector('.previous-number-entiry');
let operand;
operands.forEach(function(el){
  el.addEventListener("click", function(){
    // prevNumber.textContent=currentNumber.textContent+" "+this.textContent;
    addOperand(this.textContent);
    currentNumber.textContent="";
    operand=this.textContent;
  })
});
function addOperand(op)
{
  if(currentNumber.textContent==="") return;
  const lastChar = currentNumber.textContent.slice(-1);
  if("-*÷+".includes(lastChar)) return;
  prevNumber.textContent = currentNumber.textContent + " " + op;
}
let equal = document.querySelector('.equal');
equal.addEventListener("click", function() {
  let prev = parseFloat(prevNumber.textContent);
  let curr = parseFloat(currentNumber.textContent);
  let result;
  switch (operand){
    case '+':
      result= prev+curr;
      break;
    case '-':
      result= prev-curr;
      break;
    case '*':
      result= prev*curr;
      break;
    case '÷':
      result= prev/curr;
      break;
    default:
      result=curr;
  }
  currentNumber.textContent = result;
  prevNumber.textContent = "";
});