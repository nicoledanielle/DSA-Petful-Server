'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {catData, dogData} = require ('./data');
const {PORT, CLIENT_ORIGIN} = require('./config');
const {dbConnect} = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);
//use enqueue and dequeue to add/remove 
//use res json with the peek method
app.get('/api/cat', (req, res) => {
  res.status(200).json(catData);
});

app.get('/api/dog', (req, res) => {
  res.status(200).json(dogData);
});

app.delete('/api/cat/', (req, res) => {
  catData.shift();
  console.log('Adopted a cat!');
  res.status(204).end();
});

app.delete('/api/dog/', (req, res) => {
  dogData.shift();
  console.log('Adopted a dog!');
  res.status(204).end();
});  

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = {app};
