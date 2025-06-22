// //let's do everything again with class!
// class Calculator
// {
//   constructor(prevNumberElement, currentNumberElement)
//   {
//     this.prevNumberElement = prevNumberElement;
//     this.currentNumberElement = currentNumberElement;
//     this.clear();
//   }
//   clear()
//   {
//     this.currentNumber='';
//     this.prevNumber='';
//     this.operation = undefined
//   }
//   delete()
//   {
//     this.currentNumber = this.currentNumber.toString().slice(0, -1);
//   }
//   appendNumber(number)
//   {
//     if(number==='.'&& this.currentNumber.includes('.'))return;
//     this.currentNumber+=number.toString();
//   }
//   chooseOperation(operation)
//   {
//     if(this.currentNumber==='')return;
//     if(this.prevNumber!=='')
//     {
//       this.compute();
//     }
//     this.operation=operation;
//     this.prevNumber=this.currentNumber;
//     this.currentNumber='';
//   }
//   compute()
//   {
//     let result =0;
//     const prev = parseFloat(this.prevNumber);
//     const curr = parseFloat(this.currentNumber);
//     if(isNaN(curr) || isNaN(prev))return;
//     switch (this.operation)
//     {
//       case '+':
//         result = prev + curr;
//         break;
//       case '-':
//         result = prev - curr;
//         break;
//       case '*':
//         result = prev * curr;
//         break;
//       case '÷':
//         result = prev / curr;
//         break;
//       default:
//         return
//     }
//     this.currentNumber=result;
//     this.operation=undefined;
//     this.prevNumber='';
//   }
//   getDisplayNumber(number)
//   {
//     const stringNumber = number.toString();
//     let integerDigits = parseFloat(stringNumber.split('.')[0]);
//     let decimalDigits = stringNumber.split('.')[1];
//     let integerDisplay;
//     if(isNaN(integerDigits)) integerDisplay='';
//     else 
//     {
//       integerDisplay=integerDigits.toLocaleString('en', {maximumFractionDigits:0});
//     }
//     if(decimalDigits!=null)
//     {
//       return `${integerDisplay}.${decimalDigits}`;
//     }
//     else return integerDisplay;
//   }
//   updateDisplay()
//   {
//     this.currentNumberElement.textContent= 
//       this.getDisplayNumber(this.currentNumber)
//     if(this.operation!=null)
//     {
//       this.prevNumberElement.textContent=
//         `${this.getDisplayNumber(this.prevNumber)} ${this.operation}`;
//     }
//     else
//     {
//       this.prevNumberElement.textContent = '';
//     }
//   }
// }
// const numberButtons=document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const prevNumberElement = document.querySelector('[data-previous-operand]')
// const currentNumberElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(prevNumberElement, currentNumberElement);

// numberButtons.forEach(button=>{
//   button.addEventListener("click", ()=>{
//     calculator.appendNumber(button.textContent);
//     calculator.updateDisplay();
//   })
// });

// operationButtons.forEach(button=>{
//   button.addEventListener("click", ()=>{
//     calculator.chooseOperation(button.textContent);
//     calculator.updateDisplay();
//   })
// })


// equalsButton.addEventListener("click", ()=>{
//   calculator.compute();
//   calculator.updateDisplay();
// })

// allClearButton.addEventListener("click", ()=>{
//   calculator.clear();
//   calculator.updateDisplay();
// })
// deleteButton.addEventListener("click", ()=>{
//   calculator.delete();
//   calculator.updateDisplay();
// })
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
