document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/events');
    const events = await response.json();
    const eventList = document.getElementById('event-list');

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
            <p>Location: ${event.location}</p>
            <p>Max Attendees: ${event.maxAttendees}</p>
            ${event.image ? `<img src="/uploads/${event.image.fileName}" alt="${event.title}">` : ''}
            <button onclick="rsvp('${event._id}')">RSVP</button>
        `;
        eventList.appendChild(eventItem);
    });
});

async function rsvp(eventId) {
    const response = await fetch(`/api/events/${eventId}/rsvp`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });

    if (response.ok) {
        alert('RSVP successful');
        location.reload();
    } else {
        alert('RSVP failed');
    }
}
