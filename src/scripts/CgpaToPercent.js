document.getElementById('calculate').addEventListener('click', function () {
    const cgpa = parseFloat(document.getElementById('cgpa').value);
    if (!isNaN(cgpa) && cgpa >= 0 && cgpa <= 10) {
        const percentage = cgpa * 8.9;
        document.getElementById('result').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid CGPA between 0 and 10.';
    }
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('cgpa').value = '';
    document.getElementById('result').innerText = '';
});