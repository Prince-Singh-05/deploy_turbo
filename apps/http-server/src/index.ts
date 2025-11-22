import express from "express";
import cors from "cors";
import { client } from "@repo/db/client";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });
  res.json({
    message: "Signup successful",
    id: user.id,
  });
});

app.listen(PORT, () => {
  console.log("Http server listening on port - ", PORT);
});
