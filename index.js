/* Restrict available threads for every forked child to 1 */
process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const express = require('express');
const crypto = require('crypto');
const app = express();

/* Testing cluster Manager, will always set to true. Once cluster.fork() is called, will return false */

/* Is file being executed in master mode? */
if (cluster.isMaster) {
  /* Cause index.js to be executed again in child mode. Each child will have separate thread pool */
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  /* Child mode use case, will act like a server */

  app.get('/', (request, response) => {
    /* Handled inside event loop, we're stuck here doing the things until this fn completes */

    /* Test work function. Calculate hash then send response back */
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      console.log('Finished doing work');
    });
  });

  app.get('/fast', (request, response) => {
    response.send('This loaded *fast*');
  });

  app.listen(3000);
}


