# Charles' Mocha Project

## Description
Charles' third Mocha demo project.
* Create a server using node.js
* Use a local MongoDB to store the data on the server
* Use Postman to send http request to the server
* Write some API in the routes folder

## Main tutorial
### Install Chai
Chai, a BDD-style assertion library for Node. To install it:

`npm install chai --save-dev`

`npm install chai-http --save-dev`

### Run MongoDB Community Edition
* Set up the MongoDB environment.
MongoDB requires a data directory to store all data. MongoDB’s default data directory path is the absolute path \data\db on the drive from which you start MongoDB. Create this folder
* Start MongoDB.`~\MongoDB\Server\3.6\bin\mongod.exe`

### Use Postman to send a http request
1. Start the MongoDB as mentioned above
2. Start the server by running `npm start` in the CLI
3. Simply input the request, e.g. `localhost:8080/book`, in the Postman.

### Run the tests
1. Start the MongoDB as mentioned above
2. Start the tests by running `npm test` in the CLI

## Reference
### Documents and links
* Click [here](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai) to read the main tutorial: Test a Node RESTful API with Mocha and Chai
* Click [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition) to know see how to install and setup for MongoDB Community Edition.
* Click [here](https://github.com/Automattic/mongoose/issues/5399) to solve the error "DeprecationWarning: `open()` is deprecated in mongoose"
* Click [here](http://mongoosejs.com/docs/connections.html) to know more about MongoDB connections
* Click [here](https://docs.mongodb.com/manual/reference/connection-string/) to know more about MongoDB Connection String URI Format