const BtnCl = document.getElementById("CalBtn");
const BirthCl = document.getElementById("Birth-Date");
const resultEl = document.getElementById("result");

BtnCl.addEventListener("click", calculateAge);

function calculateAge() {
    const birthdateValue = BirthCl.value;
    if (birthdateValue === "") {
        alert("Please enter a birthday date.");
    } else {
        const age = getAge(birthdateValue);
        resultEl.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
    
    function getAge(birthdateValue) {
        const currentDate = new Date();
        const selectedDate = new Date(birthdateValue);

        let diffInYear = currentDate.getFullYear() - selectedDate.getFullYear(); // Year
        const diffInMonth = currentDate.getMonth() - selectedDate.getMonth();

        if (diffInMonth < 0 || (diffInMonth === 0 && currentDate.getDate() < selectedDate.getDate())) {
            diffInYear--;
        }

        return diffInYear;
    }
}