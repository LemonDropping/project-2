async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    const firstName = document.querySelector('#signup-first-name').value.trim();
    const lastName = document.querySelector('#signup-last-name').value.trim();


    if (email && password && firstName && lastName ) {
        const response = await fetch ('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password, firstName, lastName }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to login');
        }
    }
}