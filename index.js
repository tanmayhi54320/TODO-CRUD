const express = require("express");
const app = express();
//middleware

app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(3000, () => {
  console.log(`Server is starting on port 3000`);
});
