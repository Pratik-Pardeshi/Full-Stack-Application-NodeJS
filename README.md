# Full-Stack-Application-NodeJS
technology uses : html, CSS, JavaScript and NodeJS


File Path:
fullstack-app/
│
├── public/
│ ├── index.html
│ ├── styles.css
│ └── scripts.js
│
├── node_modules/
├── package.json
└── server.js


## Installation

1. **Clone the repository** or create a new directory:

    ```bash
    mkdir fullstack-app
    cd fullstack-app
    ```

2. **Initialize a new Node.js project**:

    ```bash
    npm init -y
    ```

3. **Install Express**:

    ```bash
    npm install express
    ```

4. **Create the Server File**:

    Create `server.js` in the root directory with the following content:

    ```javascript
    // server.js
    const express = require('express');
    const path = require('path');
    const app = express();
    const PORT = 3000;

    // Serve static files (HTML, CSS, JS)
    app.use(express.static(path.join(__dirname, 'public')));

    // API endpoint
    app.get('/api/data', (req, res) => {
        res.json({ message: 'Hello from the server!' });
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    ```

5. **Create the Public Directory and Files**:

    - Create the `public` directory and add the following files:

    ```bash
    mkdir public
    ```

    - **index.html**:

        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Full Stack Website</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <h1>Welcome to My Full Stack Website</h1>
            </header>
            <main>
                <section id="content">
                    <p>This is a simple full stack application.</p>
                </section>
                <button id="fetchData">Fetch Data from Server</button>
                <div id="serverData"></div>
            </main>
            <footer>
                <p>&copy; 2024 Pratik Pardeshi</p>
            </footer>
            <script src="scripts.js"></script>
        </body>
        </html>
        ```

    - **styles.css**:

        ```css
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem;
            text-align: center;
        }

        main {
            flex: 1;
            padding: 2rem;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }
        ```

    - **scripts.js**:

        ```javascript
        document.getElementById('fetchData').addEventListener('click', () => {
            fetch('/api/data')
                .then(response => response.json())
                .then(data => {
                    const dataDiv = document.getElementById('serverData');
                    dataDiv.innerHTML = `<p>Server says: ${data.message}</p>`;
                })
                .catch(error => console.error('Error fetching data:', error));
        });
        ```

## Running the Application

1. **Start the Server**:

    Ensure you are in the `fullstack-app` directory and then run:

    ```bash
    node server.js
    ```

2. **Open the Browser**:

    Navigate to `http://localhost:3000` in your web browser to see the application.

