const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //   res.end('Hello World');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Tutorial</title>
    <!-- This is External CSS -->
    <link rel="stylesheet" href="tutorial00.css">
    <!-- This is Internal CSS -->
    <style>
        p{
            color: brown;
            background-color: beige !important;
        }
    </style>
</head>
<body>
    <h3>This is CSS Tutorial...</h3>
    <!--This is Inline CSS-->
    <!-- <p style="color: red; background-color: aquamarine;">This tutorial will teach you everything you need 
    to know about HTML/CSS</p> -->
    <p>This tutorial will teach you everything you need to know about HTML/CSS</p>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});