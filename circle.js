const radius = 4;
const circumference = 2 * Math.PI * radius;
const surfaceArea = Math.PI * radius * radius;


document.getElementById('circumference').textContent = `The circumference of the circle is ${circumference.toFixed(2)}.`;
document.getElementById('surfaceArea').textContent = `The surfaceArea of the circle is ${surfaceArea.toFixed(2)}.`;