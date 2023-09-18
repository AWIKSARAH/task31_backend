import express, { urlencoded } from "express";
import cors from "cors";
import userRoutes from "./routes/userRouter.js";
import categoryRoutes from "./routes/categoryRoute.js";
import blogRoutes from "./routes/blogRoute.js";
import commentRoute from "./routes/commentRoute.js";
import connection from "./libs/connection_db.js";

const app = express();
const port = process.env.PORT || 3000;

connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//INCLUDE THE ROUTING

app.use("/api/auth/user/", userRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/blog/", blogRoutes);
app.use("/api/comment/", commentRoute);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "Authorization");
  next();
});
app.use(function (err, req, res, next) {
  // console.log(err);
  res.status(err.status || 500).send({
    success: false,
    message: err.message,
  });
});
app.listen(port, () => {
  console.log(`Hello :) Your Server Running on :  http://localhost:${port}`);
});

/**
 *
 * Sarah awik 9 - 16 -2023
 */
