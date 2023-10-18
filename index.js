import express from "express";

const app = express();
const port = 5001;

app.get("/", (req, res) => {
  res.status(200);
  res.json({ title: "Welcome to Product Backend" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
