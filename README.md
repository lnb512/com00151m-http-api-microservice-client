# COM00151M final project repository.
# It contains source code for the HTTP Microservices REST API client application.

## This HTTP Microservice leverages the Problem Details RFC 7807 HTTP specification to return detailed HTTP errors to the client application, for improved troubleshooting. 

## The client send a POST Request of a student's details (first name, last name and student number) to the HTTP Microservice for validation.  


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/lnb512/com00151m-http-api-microservice-client.git 
cd repository folder
npm install 
npm start
```

# Your app should now be running locally.
Load http://localhost:3000 on your client (browser) to send request to HTTP Microservice.
The HTTP Problem Details Response will be sent to your terminal console. 

# Use Postman API client to trigger the HTTP Microservice REST API
Make sure you have [Postman](https://www.postman.com/downloads/) installed. 
Send a GET request to http://localhost:3000 and the response will appear below your request.
