import express from "express";

const app = express();
const port = 5432;

app.get("/", (req: any, res: any) => {
  res.status(200);
  res.json({ title: "Welcome to Product Backend" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
