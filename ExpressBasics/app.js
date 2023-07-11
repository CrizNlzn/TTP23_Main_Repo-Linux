const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(`
      <html>
        <head>
          <title>Criz_site</title>
        </head>
        <body>
          <h1>Hello Criz</h1>
        </body>
      </html>
    `);
});

app.get("/criz", (req, res) => {
res.send(`criz`);
});

const PORT = 1337;
app.listen(PORT, () => {
console.log(`listening on criz port ${PORT}`);
});

//tetsing SSH
