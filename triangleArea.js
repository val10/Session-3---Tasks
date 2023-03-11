const a = 5;
const b = 6;
const c = 7;

var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));

document.getElementById('triangleArea').textContent = `The triangle area is ${area.toFixed(2)}.`;