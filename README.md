## Node Performance and Benchmarking Exercises
Exploring node clustering, worker threads, testing server performance and other run topics.

Not using nodemon since it doesn't work very nicely with clustering.

Benchmarking conducting with ab - [Apache HTTP server benchmarking tool](https://httpd.apache.org/docs/2.4/programs/ab.html)

Process managing with [PM2](https://pm2.keymetrics.io/) daemon process manager.

### PM2 Cheatsheet:
Command  | Summary
------------- | -------------
`pm2 list`      | summary of instances and related cluster health
`pm2 show` [*name of instance*]    | deep dive information for specific server instance
`pm2 monit`| creates dashboard of processes
`pm2 delete` [*name of instance*]| stops a specific instance