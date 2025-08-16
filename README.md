<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AuthFlow: MERN Stack Authentication System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1a1a1a;
            --text-color: #e0e0e0;
            --primary-color: #61dafb; /* React blue */
            --secondary-color: #8be9fd;
            --card-bg: #2d2d2d;
            --border-color: #444;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            padding: 2rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            max-width: 900px;
            width: 100%;
            padding: 2rem;
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
        }

        h1, h2, h3 {
            color: var(--primary-color);
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-top: 2rem;
        }

        h1 {
            font-size: 2.5rem;
            text-align: center;
            border-bottom: none;
            padding-bottom: 0;
            margin-top: 0;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        p, ul, li {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        ul {
            list-style-type: '👉 ';
            padding-left: 1.5rem;
        }

        pre {
            background-color: #1e1e1e;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            position: relative;
            border: 1px solid #3a3a3a;
        }
        
        pre code {
            font-family: monospace;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .code-block-container {
            position: relative;
            margin-bottom: 1.5rem;
        }
        
        .copy-btn {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background-color: #333;
            color: #ccc;
            border: none;
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background-color 0.2s, transform 0.2s;
        }

        .copy-btn:hover {
            background-color: #555;
            transform: translateY(-2px);
        }

        .copy-btn:active {
            transform: translateY(0);
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.2s;
        }

        a:hover {
            color: var(--secondary-color);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AuthFlow: MERN Stack Authentication System</h1>

        <h2>Project Description</h2>
        <p>This project is a robust, full-stack authentication system built using the MERN stack (MongoDB, Express.js, React, Node.js). The frontend is powered by Vite for a fast and efficient development experience. It provides a complete solution for user authentication, including secure password handling, token-based sessions, and third-party login with Google.</p>

        <h2>Features</h2>
        <ul>
            <li><strong>User Registration & Login:</strong> Secure user creation and authentication with email and password.</li>
            <li><strong>Form Validation:</strong> Client-side validation to ensure data integrity and a smooth user experience.</li>
            <li><strong>Secure Sessions:</strong> Utilizes JSON Web Tokens (JWT) for secure, stateless sessions.</li>
            <li><strong>Cookie-Based Tokens:</strong> JWTs are stored in HTTP-only cookies to protect against Cross-Site Scripting (XSS) attacks.</li>
            <li><strong>Protected Routes:</strong> Middleware to restrict access to certain routes, ensuring only authenticated users can view private content.</li>
            <li><strong>Redirects:</strong> Users are automatically redirected to the login page if they are unauthenticated and attempt to access a protected route.</li>
            <li><strong>Google OAuth 2.0:</strong> Seamless third-party authentication using Google Sign-In.</li>
            <li><strong>Password Hashing:</strong> User passwords are encrypted using bcrypt for maximum security.</li>
        </ul>

        <h2>Technologies Used</h2>
        <p><strong>Frontend (Client):</strong></p>
        <ul>
            <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
            <li><strong>Vite:</strong> A build tool that provides a lightning-fast development server and optimized build process.</li>
            <li><strong>React Router DOM:</strong> For handling client-side routing and protected routes.</li>
            <li><strong>Axios:</strong> A promise-based HTTP client for making API requests.</li>
        </ul>
        <p><strong>Backend (Server):</strong></p>
        <ul>
            <li><strong>Node.js:</strong> A JavaScript runtime environment.</li>
            <li><strong>Express.js:</strong> A fast, unopinionated, minimalist web framework for Node.js.</li>
            <li><strong>MongoDB:</strong> A NoSQL database for storing user data.</li>
            <li><strong>Mongoose:</strong> An object data modeling (ODM) library for MongoDB and Node.js.</li>
            <li><strong>JSON Web Token (JWT):</strong> For creating and verifying secure tokens.</li>
            <li><strong>bcryptjs:</strong> For hashing and salting passwords.</li>
            <li><strong>cookie-parser:</strong> Middleware for parsing cookies attached to the client request.</li>
            <li><strong>dotenv:</strong> To load environment variables from a `.env` file.</li>
            <li><strong>Google OAuth2 Library:</strong> For handling Google authentication.</li>
        </ul>

        <h2>Getting Started</h2>
        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v14 or higher)</li>
            <li>MongoDB (running locally or a cloud service like MongoDB Atlas)</li>
        </ul>

        <h3>Installation</h3>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name</code></pre>
        </div>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>cd backend
npm install</code></pre>
        </div>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>cd ../frontend
npm install</code></pre>
        </div>

        <h3>Environment Variables</h3>
        <p>Create a `.env` file in the <code>backend</code> directory with the following variables:</p>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_very_secure_random_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret</code></pre>
        </div>
        <ul>
            <li><code>MONGO_URI</code>: Your MongoDB connection string.</li>
            <li><code>JWT_SECRET</code>: A long, random string used to sign your JWTs.</li>
            <li><code>GOOGLE_CLIENT_ID</code> & <code>GOOGLE_CLIENT_SECRET</code>: Get these from the Google Cloud Console by setting up a new OAuth 2.0 client ID for a web application.</li>
        </ul>

        <h3>Running the Application</h3>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>cd backend
npm start</code></pre>
        </div>
        <div class="code-block-container">
            <button class="copy-btn">Copy</button>
            <pre><code>cd ../frontend
npm run dev</code></pre>
        </div>
        <p>The application will be accessible at <code>http://localhost:5173</code>.</p>

        <h2>Authentication Details</h2>
        <h3>User Validation & Redirects</h3>
        <ul>
            <li><strong>Frontend:</strong> The React components use state management to track the user's authentication status. Forms include client-side validation to ensure fields are filled out correctly before submission.</li>
            <li><strong>Backend:</strong> Express.js routes have validation middleware to sanitize and validate incoming data before processing.</li>
            <li><strong>Redirects:</strong>
                <ul>
                    <li>Upon successful login, the user is redirected to a protected dashboard or home page.</li>
                    <li>If an unauthenticated user attempts to access a protected route, the middleware intercepts the request and sends a 401 Unauthorized status, triggering a client-side redirect to the login page.</li>
                </ul>
            </li>
        </ul>

        <h3>Tokens and Cookies</h3>
        <ul>
            <li><strong>JWT Generation:</strong> When a user logs in successfully, the backend generates a JWT containing the user's ID.</li>
            <li><strong>Cookie Storage:</strong> The JWT is sent to the client and stored in an HTTP-only cookie. This type of cookie is not accessible via JavaScript, mitigating the risk of XSS attacks. The cookie is also configured with the <code>secure</code> flag in production to ensure it's only sent over HTTPS.</li>
            <li><strong>Token Verification:</strong> For every subsequent request to a protected route, the server checks for the presence of the JWT in the cookie. It then verifies the token's signature using the <code>JWT_SECRET</code>. If the token is valid, the user's ID is attached to the request object, allowing access to the protected route.</li>
        </ul>

        <h3>Google Login</h3>
        <ul>
            <li>The application uses the Google OAuth 2.0 flow.</li>
            <li>The frontend sends the Google ID token to the backend.</li>
            <li>The backend verifies the ID token with Google's API to ensure its authenticity.</li>
            <li>Once verified, the backend either finds an existing user or creates a new one based on the Google profile data.</li>
            <li>A standard JWT is then generated for the user and stored in a cookie, just like a regular email/password login, providing a consistent authentication experience.</li>
        </ul>

        <h2>Contributing</h2>
        <p>Contributions are welcome! Please open an issue or submit a pull request.</p>

        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const copyButtons = document.querySelectorAll('.copy-btn');
            
            copyButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const codeBlock = button.nextElementSibling;
                    const textToCopy = codeBlock.innerText;

                    // Use a temporary textarea to copy the text
                    const tempTextarea = document.createElement('textarea');
                    tempTextarea.value = textToCopy;
                    document.body.appendChild(tempTextarea);
                    tempTextarea.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempTextarea);

                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
            });
        });
    </script>
</body>
</html>
