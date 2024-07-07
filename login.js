function login() {
    const password = document.getElementById('password').value;
    if (password === 'RamaniKandhan') { // Replace 'yourpassword' with your desired password
        window.location.href = 'login.html';
    } else {
        alert('Incorrect password');
    }
}
