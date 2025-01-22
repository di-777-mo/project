function checkName() {
    const name = document.getElementById('firstName').value;
    const nameCheckMessage = document.getElementById('nameCheckMessage');
    if (name.length < 3) {
        nameCheckMessage.textContent = "სახელი უნდა იყოს მინიმუმ 3 სიმბოლო.";
        nameCheckMessage.style.backgroundColor = "red";
        nameCheckMessage.style.color = "white";
    } else {
        nameCheckMessage.textContent = "სახელი სწორია!";
        nameCheckMessage.style.backgroundColor = "green";
        nameCheckMessage.style.color = "white";
    }
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const passwordStrengthMessage = document.getElementById('passwordStrengthMessage');
    const weakPattern = /^[a-zA-Z]+$/; 
    const mediumPattern = /^[a-zA-Z0-9]+$/; 
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/; 

    if (weakPattern.test(password)) {
        passwordStrengthMessage.textContent = "პაროლი სუსტი: შეიცავს მხოლოდ ინგლისურ ასოებს.";
        passwordStrengthMessage.style.color = "red";
    } else if (mediumPattern.test(password)) {
        passwordStrengthMessage.textContent = "პაროლი საშვალო: შეიცავს ინგლისურ ასოებს და რიცხვებს.";
        passwordStrengthMessage.style.color = "orange";
    } else if (strongPattern.test(password)) {
        passwordStrengthMessage.textContent = "პაროლი ძლიერი: შეიცავს როგორც დიდი და პატარა ინგლისურ ასოებს, ასევე რიცხვებს.";
        passwordStrengthMessage.style.color = "green";
    } else {
        passwordStrengthMessage.textContent = "პაროლი არ აკმაყოფილებს მოთხოვნებს.";
        passwordStrengthMessage.style.color = "red";
    }
}

function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMatchMessage = document.getElementById('passwordMatchMessage');

    if (password !== confirmPassword) {
        passwordMatchMessage.textContent = "პაროლები არ ემთხვევა.";
        passwordMatchMessage.style.color = "red";
    } else {
        passwordMatchMessage.textContent = "პაროლები ემთხვევა!";
        passwordMatchMessage.style.color = "green";
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "გთხოვთ, შეიყვანოთ სწორი ე-ფოსტა";
        emailError.style.color = "red";
    } else {
        emailError.textContent = "";
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\+?\d{9,15}$/;
    if (!phone.match(phonePattern)) {
        phoneError.textContent = "გთხოვთ, შეიყვანოთ სწორი ტელეფონის ნომერი";
        phoneError.style.color = "red";
    } else {
        phoneError.textContent = "";
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;

    validateEmail();

    validatePhone();

    const name = document.getElementById('firstName').value;
    if (name.length < 3) {
        valid = false;
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword || password.length < 6) {
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});

document.getElementById('password').addEventListener('input', checkPasswordStrength);
document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);
