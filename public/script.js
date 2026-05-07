document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = 'Verifying...';

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
            window.location.href = result.redirectTo;
        } else {
            messageDiv.textContent = result.message;
        }
    } catch (error) {
        messageDiv.textContent = 'Connection error. Is the server running?';
    }
});