require("dotenv").config();
const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/userRouter");
const Auth = require("./middlewares/Auth");
const addressRouter = require("./routes/addressRouter");
const courseRouter = require("./routes/courseRouter");
const paymentRouter = require("./routes/paymentRouter");

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Auth);
mongoose.connect(
   `mongodb+srv://Charan_sai:darling_242726@cluster0.tr74xjt.mongodb.net/charanEdtech`
);

app.use("/users",userRouter); // http://localhost:4000/users/login
app.use("/address", addressRouter);
app.use("/course", courseRouter);
app.use("/payment", paymentRouter);


app.listen(4000, () => console.log("server running at port 4000"));
