const http = require("http");

const port = 8081; //local port number

http

  .createServer((request, response) => {
    //callback function
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Hello, this is from my server</h1>");
    response.end();
  })
  .listen(port, () => {
    // callback function
    console.log(`Nodejs server started on port ${port}`);
  });

// http://localhost:8081
