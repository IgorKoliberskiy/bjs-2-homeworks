// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = 100;
  max = -100;
  sum = 0;
    
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  
  avg = Number((sum / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  // Ваш кода
  // for...
  for (let i = 0; i < arrOfArr.length; i += 1) {
    func(arrOfArr[i]);
    
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min, max, difference;
  min = Infinity;
  max = -Infinity;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return difference = Math.abs(max - min);
}
