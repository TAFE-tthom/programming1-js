
import express from 'express';

const app = express();

let PORT = 3000;
let folder = './all_files';
let _server = null;

// Do not touch code above

//TODO: Add you endpoint logic here


// Do not touch code below

export async function startServer() {
  _server = app.listen(PORT, function() {});
  return _server;
}

export async function closeServer() {
  if(_server != null) {
    return _server.close();
  }
  return true;
}

export async function setConfig(data) {
  PORT = data.port;
  folder = data.files;
}
