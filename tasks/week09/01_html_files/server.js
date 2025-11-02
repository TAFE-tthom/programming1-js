
import express from 'express';

const app = express();

let _server = null;

// Do not touch code above

//TODO: Add you endpoint logic here


// Do not touch code below

export async function startServer() {
  _server = app.listen(3000, function() {});
  return _server;
}

export async function closeServer() {
  if(_server != null) {
    return _server.close();
  }
  return true;
}

