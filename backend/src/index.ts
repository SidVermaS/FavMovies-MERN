import "./loadEnv";
import path from "path";
import express from "express";
import cors from "cors";
import router from "./routers";
import sequelize from "./db/db";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  await sequelize.sync({ force: false });

  console.log(`Server is running on ${PORT}`);
});
