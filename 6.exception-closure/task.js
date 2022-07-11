function parseCount (num) {
  let parseResult = Number.parseInt(num);
  if (isNaN(parseResult)) {
    throw new Error("Невалидное значение");
  }

  return parseResult; 
}

function validateCount (num) {
  try {
    return parseCount(num);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
      const error = new Error('Треугольник с такими сторонами не существует')
      throw error;
    }
  }

  getPerimeter() {
    let perimetr = this.a + this.b + this.c;
    return perimetr;
  }

  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c) 
    } catch (error) {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      getArea() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}