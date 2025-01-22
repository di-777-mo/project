document.getElementById('loginForm').addEventListener('submit', function(event) {
    let valid = true;

    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    emailError.textContent = '';
    if (!email.value.match(emailRegex)) {
        emailError.textContent = 'გთხოვთ, შეიყვანოთ ვალიდური ელ.ფოსტა';
        valid = false;
    }

    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    passwordError.textContent = '';
    if (password.value.trim().length < 6) {
        passwordError.textContent = 'პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});