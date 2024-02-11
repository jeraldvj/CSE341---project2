const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Portfolio Builder',
    description: 'This is an api server for a portfolio builder website.\n'
  },
  host: 'https://cse341-project2-0lcr.onrender.com',
  schemes: ['https']
};

const outputFile = './swaggerDoc.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);