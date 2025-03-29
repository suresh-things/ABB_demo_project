// Import the HTTP module
const http = require('http');

// Define hostname and port
const hostname = '0.0.0.0';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Send the response based on the URL path
  if (req.url === '/') {
    res.end(`
      <html>
        <head>
          <title>My Node.js App</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #2c3e50; }
            nav { margin: 20px 0; }
            nav a { margin-right: 15px; color: #3498db; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
            .content { line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>Welcome to My Node.js Application</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div class="content">
            <p>This is a simple Node.js application running on your local machine.</p>
            <p>Try clicking the navigation links above to see different pages.</p>
            <p>Current time: ${new Date().toLocaleTimeString()}</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/about') {
    res.end(`
      <html>
        <head>
          <title>About - My Node.js App</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #2c3e50; }
            nav { margin: 20px 0; }
            nav a { margin-right: 15px; color: #3498db; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
            .content { line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>About This Application</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div class="content">
            <p>This is a simple demonstration of a Node.js web server.</p>
            <p>It shows how to create different routes and serve HTML content without using any external frameworks.</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/contact') {
    res.end(`
      <html>
        <head>
          <title>Contact - My Node.js App</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #2c3e50; }
            nav { margin: 20px 0; }
            nav a { margin-right: 15px; color: #3498db; text-decoration: none; }
            nav a:hover { text-decoration: underline; }
            .content { line-height: 1.6; }
          </style>
        </head>
        <body>
          <h1>Contact Us</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
          <div class="content">
            <p>This is the contact page.</p>
            <p>In a real application, you might include a form or contact information here.</p>
          </div>
        </body>
      </html>
    `);
  } else {
    // Handle 404 - Page Not Found
    res.statusCode = 404;
    res.end(`
      <html>
        <head>
          <title>404 - Page Not Found</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; text-align: center; }
            h1 { color: #e74c3c; }
            a { color: #3498db; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for doesn't exist.</p>
          <p><a href="/">Go back to homepage</a></p>
        </body>
      </html>
    `);
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
module.exports = server;