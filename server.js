import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 7321;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join("/index.html"));
});

app.listen(port, () => {
  console.log(`server is on... localhost:${port}`);
});
