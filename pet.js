const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let message = document.getElementById("message");

        if (name === "" || email === "" || password === "" || confirmPassword === "") {

            message.innerHTML = "❌ Please fill all fields!";
            message.style.color = "red";
            return;
        }

        if (password.length < 6) {

            message.innerHTML = "❌ Password must be at least 6 characters!";
            message.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {

            message.innerHTML = "❌ Passwords do not match!";
            message.style.color = "red";
            return;
        }

        message.innerHTML = "✅ Registration Successful!";
        message.style.color = "green";
    });

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let loginMessage = document.getElementById("loginMessage");

        if (email === "" || password === "") {

            loginMessage.innerHTML = "❌ Please fill all fields!";
            loginMessage.style.color = "red";
            return;
        }

        loginMessage.innerHTML = "✅ Login Successful!";
        loginMessage.style.color = "green";
    });

}