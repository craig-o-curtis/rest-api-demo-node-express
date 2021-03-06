import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

// ** mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ** For Express version 4.17, is it safe to use express instead of body-parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// ** Serve static files
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
