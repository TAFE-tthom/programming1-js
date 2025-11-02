
# Simple Web Server

Using some of the basics you have built up already with express, you will be building a simple web server that will serve html files that are requested by it. The `.html` files will be in the `public` folder as part of the scaffold provided.

Your project should have the following file structure.

```
server.js
public/
package.json
node_modules/
```

* `node_modules/` and `package.json` are used as part of the project dependencies and project data description.

* `public/` is a folder that contains `index.html` and `about.html`.

To serve the html, you will need to set up two endpoints.

* `GET /` - This endpoint will serve `public/index.html` to the user, it is the base address and by convention will provide a page that is first document of the website.


* `GET /<name>` - This endpoint will serve any file inside `public/`, to test this, you should be able to go to `localhost:3000/index.html` and get the contents of `public/index.html` as well as getting the contents from `public/about.html` when visiting `localhost:3000/about.html.

As an extension, try to omit the extension and match to the most appropriate file given.

Hint:

Express has a method called `static` which allows you to serve a file from a given folder. To use, you can refer to the following documentation: <https://expressjs.com/en/starter/static-files.html>



However! To do this manually, you will need to use `node:fs` module and read the contents of the file and return it. Attempt this after completing it with express.static so you understand what is involved.

You will need to utilise `async` functions on the endpoints to ensure that the data requested is retrieved before sending it back to the client. A callback method is applicable but may be less intuitive.

