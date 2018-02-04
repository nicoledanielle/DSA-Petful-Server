'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {catQueue, dogQueue, peek} = require ('./data');
const {PORT, CLIENT_ORIGIN} = require('./config');
const {dbConnect} = require('./db-mongoose');

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


app.get('/api/cat', (req, res) => {
  const empty = 'Sorry, all cats have already been adopted!';
  if(peek(catQueue)){
    res.status(200).json(peek(catQueue));
  }
  else{
    res.json({empty});
  }
});

app.get('/api/dog', (req, res) => {
  const empty = 'Sorry, all dogs have already been adopted!';
  if(peek(dogQueue)){
    res.status(200).json(peek(dogQueue));
  }
  else{
    res.json({empty});
  }
});

app.delete('/api/cat/', (req, res) => {
  catQueue.dequeue();
  console.log('Adopted a cat!');
  res.status(204).end();
});

app.delete('/api/dog/', (req, res) => {
  dogQueue.dequeue();
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
