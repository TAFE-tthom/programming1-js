# File Server

You have been tasked with building a file server application using node and express. For a description of a file server and what is involved in your task. A file server is a server that will be able to serve files that are requested from the client.

Your server will need to do the following:

* Accept a configuration file as a command line argument. This configuration file will be a `.json` file that can be deserialised.

The configuration file will have the following fields:

  * `files` - This field should be string that maps to a directory that the server will serve files from.
  * `port` - This field should be a number that maps to the port number the server will be hosted on.

You can use the following example config:

```
{
  "files": "./all_files",
  "port": 3115
}
```
  
* The server needs to provide a few endpoints:

  * `GET /` - This returns a listing of all files within the directory specified by `files`. Your server should return an unordered list, where each list item should have the filename outlined an an `anchor` tag to ensure the file can be downloaded.


  * `GET /download/:file` - If the `file` outlined exists in the directory that `files` points to, the browser should be able to download the file. Make sure the client is able to do this.

  If the file does not exist, the client should be redirected to `/notfound`.

  * `GET /notfound` - This endpoint is our error page, it should outline that the file request was not found on the server.

Now to test your fileserver, place files inside the directory you are intending to use, once you have done, see if you can access them through the browser and download them again.


