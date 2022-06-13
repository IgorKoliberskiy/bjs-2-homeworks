"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (a === 0) {
    arr.length = 0;
  } else if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant))/(2 * a);
    arr[1] = (-b - Math.sqrt(discriminant))/(2 * a);
  } else if (discriminant === 0) {    
    arr[0] = -b / (2 * a);
  }  
    
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  let now = new Date(); // текущая дата

  if (isNaN(percent) || percent < 0) {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if (isNaN(contribution) || contribution < 0) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if (isNaN(amount)) {
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } else if (now >= date) {
    return(`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
  }

  // процентная ставка для расчета ежемесячного платежа
  let interestRate = percent / 100 * 1 / 12; 
  
  // тело кредита
  let loanBody = amount - contribution;
  
  // количество месяцев
  let numberOfMonths = (date.getFullYear() - now.getFullYear()) * 12 - date.getMonth() + now.getMonth();

  // ежемесячный платеж
  let monthlyPayment = loanBody * (interestRate + (interestRate / (Math.pow((1 + interestRate), numberOfMonths) - 1))); 
  
  console.log(monthlyPayment);

  totalAmount = Math.round(numberOfMonths * monthlyPayment * 100) / 100;
   
  return totalAmount;
}


