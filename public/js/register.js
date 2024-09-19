document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify({
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        alert('Registration successful');
        window.location.href = 'index.html';
    } else {
        alert('Registration failed');
    }
});
