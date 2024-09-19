document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch('/api/events', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                alert('Event created successfully!');
                window.location.href = 'index.html'; // Redirect to index.html
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the event.');
        }
    });
});
