document.getElementById('login-btn').addEventListener('click', function () {
    // get email input
    const emailBox = document.getElementById('user-email');
    const userEmail = emailBox.value;

    // get password input
    const passwordBox = document.getElementById('user-password');
    const userPasseord = passwordBox.value;
    console.log(userPasseord);
    // login condition
    if (userEmail == 'bappi@mail.com' && userPasseord == '1234') {
        window.location.href = 'banking.html';
    }
    else if (userEmail != 'bappi@mail.com') {
        alert('please input valid email');
    }
    else if (userPasseord != '1234') {
        alert('please input valid password');
    }
});
