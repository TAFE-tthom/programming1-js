import express from 'express';
import fs from 'node:fs';
import readline from 'node:readline';

const app = express();

app.enable('strict routing');

app.use("/", express.static('public'));


app.get("/", async function(req, res) {

    const file = fs.createReadStream('./public/index.html');
    const rl = readline.createInterface({
        input: file
    });

    let page = '';
    for await(const line of rl) {
        page += line;
    }

    res.contentType('html').send(page);
});

app.listen(3000, function() {
    console.log("We are now listening on port 3000");
})