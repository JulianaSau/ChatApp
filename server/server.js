const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id)
//   const singleChat = chats.find((chat) => chat._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server has started on port ${PORT}`.yellow.bold));
