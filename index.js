const express = require('express');
const app = express();

const cluster = require('cluster');

/* Testing cluster Manager, will always set to true. Once cluster.fork() is called, will return false */

/* Is file being executed in master mode? */
if (cluster.isMaster) {
  /* Cause index.js to be executed again in child mode */
  cluster.fork();
} else {
  /* Child mode use case, will act like a server */

    /**
     * Test function, will try to simulate doing work,
     * using as much CPU power as possible for some set of ms
     * @param { number } duration in millisections
     */
  function doTheThings(duration) {
    const start = Date.now();
    while(Date.now() - start < duration ) {}
  }

  app.get('/', (request, response) => {
    /* Handled inside event loop, we're stuck here doing the things until this fn completes */
    doTheThings(5000);
    response.send('Hello');
  });

  app.listen(3000);
}


