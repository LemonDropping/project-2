async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password ) {
        const response = await fetch ('/api/users/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to login');
        }
    }
}

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    loginFormHandler(event);
});

const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', function(event) {
    signupFormHandler(event);
});

//add eventlistener for signup