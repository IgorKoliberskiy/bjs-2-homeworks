function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict"
  arr = [];
  
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0 || a === 0) { //
    arr.length = 0;
  } else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  } else {    
    arr[0] = (-b + Math.sqrt(discriminant))/(2 * a);
    arr[1] = (-b - Math.sqrt(discriminant))/(2 * a);
  }  
    
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  "use strict"

  let interestRate = percent / 100 * 1 / 12; // процентная ставка
  let monthlyPayment; // ежемесячный платеж
  let numberOfMonths; // количество месяцев
  let now = new Date(); // текущая дата
  let loanBody = amount - contribution; // тело кредита
  
  if (Number.isNaN(percent) || percent < 0) {
    alert(`Параметр "Процентная ставка" содержит неправильное значение ${"percent"}`);
  } else if (Number.isNaN(contribution) || contribution < 0) {
    alert(`Параметр "Начальный взнос" содержит неправильное значение ${"contribution"}`);
  } else if (Number.isNaN(amount) || amount <= contribution) {
    alert(`Параметр "Общая стоимость" содержит неправильное значение ${"amount"}`);
  } else if (now >= date) {
    alert(`Параметр "Срок ипотеки" содержит неправильное значение ${date}`);
  }
  
  numberOfMonths = (date.getFullYear() - now.getFullYear()) * 12 - date.getMonth() + now.getMonth();

  monthlyPayment = (loanBody * (interestRate + (interestRate / (Math.pow((1 + interestRate), numberOfMonths) - 1)))).toFixed(2);
  console.log(monthlyPayment);

   
  return totalAmount;
}


