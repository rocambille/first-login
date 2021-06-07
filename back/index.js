const app = require('./app');

// listen to incoming requests
const serverPort = 8000;
app.listen(serverPort, () => console.log('Express server is running'));
