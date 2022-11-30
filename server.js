const express = require("express");
const { render } = require("express/lib/response");
const http = require("http");
const { Server } = require("socket.io");
const Products = require("./container/productsContainer");
const productsContainer = new Products("products");
const Messages = require("./container/messagesContainer");
const { assert } = require("console");
const messagesContainer = new Messages("messages");

const app = express();

const httpServer = http.createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT || 8080;

app.set("views", "./public");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

io.on("connection", async (socket) => {
  console.log("User connected, id:" + socket.id);
  socket.emit("products", await productsContainer.getAll());

  socket.emit("messages", await messagesContainer.getAll());

  socket.on("new-product", async (product) => {
    await productsContainer.save(product);
    io.emit("products", await productsContainer.getAll());
  });
  socket.on("new-message", async (text) => {
    await messagesContainer.save(text);
    io.emit("messages", await messagesContainer.getAll());
  });
});

const server = httpServer.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
server.on("error", (error) => console.log("Error on server", error));
