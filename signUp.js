const button = document.getElementById('sign-in');

// Log in Button
button.addEventListener('click', function() {
    const pass = document.getElementById('password');
    const username = document.getElementById('username');
    if(username.value == "admin" && pass.value == "admin123"){
        window.location.href = "main.html";
    }
    else{
        alert("Invalid Credentials");
    }
});