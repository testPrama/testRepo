const http = require("node:http");
const template = require("lodash/template");

http
  .createServer((request, response) => {
    const source = new URL(request.url, "http://localhost").searchParams.get(
      "template",
    );
    response.end(template(source ?? "Hello, <%= name %>!")({ name: "test" }));
  })
  .listen(3000);
