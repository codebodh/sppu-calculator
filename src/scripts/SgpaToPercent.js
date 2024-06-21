document.getElementById('calculate').addEventListener('click', function () {
    const sgpa = parseFloat(document.getElementById('sgpa').value);
    if (!isNaN(sgpa) && sgpa >= 0 && sgpa <= 10) {
        const percentage = (sgpa * 10) - 7.5;
        document.getElementById('result').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid CGPA between 0 and 10.';
    }
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('sgpa').value = '';
    document.getElementById('result').innerText = '';
});