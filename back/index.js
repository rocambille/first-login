const app = require('./app');

const serverPort = 8000;

// listen to incoming requests
app.listen(serverPort, () => console.log('Express server is running'));
