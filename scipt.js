// Select elements from the DOM
const calculateButton = document.getElementById('calculate');
const birthDateInput = document.getElementById('birthDate');
const resultDisplay = document.getElementById('result');

// Function to calculate age
function calculateAge() {
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        resultDisplay.textContent = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    resultDisplay.textContent = `Your age is ${age} years.`;
}

// Add event listener to the button
calculateButton.addEventListener('click', calculateAge);