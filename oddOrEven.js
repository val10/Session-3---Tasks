function typeNumber(event) {
    event.preventDefault();

    const number = parseFloat(document.getElementById('number').value);

    if (number % 2 === 0) {
        document.getElementById('typeNumber').textContent = `The number is EVEN`;
    } else {
        document.getElementById('typeNumber').textContent = `The number is ODD`;
    }


}