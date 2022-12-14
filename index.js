const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/course.json")

app.get("/", (req, res) => {
  res.send("Code Easy Server Is Running!!!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const singleCourse = courses.find((course) => course.id === id);
  res.send(singleCourse);
});

app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
  const checkoutCourse = courses.find((course) => course.id === id);
  res.send(checkoutCourse);
});
 
app.listen(port, () => {
  console.log(`Code Easy app listening on port ${port}`);
});
