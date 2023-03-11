function findDiagonal(event) {
    event.preventDefault(); // prevent form submission and page reload

    const sideLength = parseFloat(document.getElementById('sideLength').value);
    const diagonal = Math.sqrt(2) * sideLength;

    document.getElementById('diagonalResult').textContent = `The diagonal of the square is ${diagonal.toFixed(2)}.`;
}