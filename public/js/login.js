document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        alert('Login successful');
        window.location.href = 'index.html';
    } else {
        alert('Login failed');
    }
});
