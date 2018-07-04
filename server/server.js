const express = require("express");
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err) {
    console.error(err);
  }

const db = client.db('todo_list');
const tasksCollection = db.collection('tasks');
const tasksRouter = createRouter(tasksCollection);
app.use('/api/tasks', tasksRouter);
});
app.listen(3000, function () {
 console.log(`LISTENING ON PORT ${ this.address().port}`);
});
