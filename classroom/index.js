const express = require("express");
const app = express();
const port = 3000;
const cookieparser = require("cookie-parser");
const session = require("express-session");
app.use(cookieparser("secretcode"));
app.use(
  session({ secret: "mypeoples", resave: false, saveUninitialized: true })
);

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.listen(port, () => {
  console.log("listing...");
});
