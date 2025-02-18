
const http = require('http');

 const options = {
  hostname: 'google.com',
  port: 80,
  path: '/',
  method: 'GET',
};

export default options;

const request = http.request(options, (res) => {
  let responseData = '';

  // Collect the data chunks
  res.on('data', (chunk) => {
    responseData += chunk;
  });

  // Log the complete response
  res.on('end', () => {
    console.log(responseData);
  });
});

// Handle errors
request.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

// End the request
request.end();

