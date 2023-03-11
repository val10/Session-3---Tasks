function findBiggerNumber(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > num2) {
        document.getElementById('biggernumber').textContent = `The bigger number is ${num1}.`;
    } else if (num2 > num1) {
        document.getElementById('biggernumber').textContent = `The bigger number is ${num2}.`;
    } else {
        document.getElementById('biggernumber').textContent = `The both numbers are equal`;
    }



}