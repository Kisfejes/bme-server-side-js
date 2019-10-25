// core
const http = require('http');
const path = require('path');
// 3pp
const portfinder = require('portfinder');
const express = require('express');
const session = require('express-session');

const indexRouter = require('./routes/index.routes');

const PROJECT_ROOT = path.resolve(__dirname, '..');

async function main() {
  try {
    const port = await portfinder.getPortPromise({ port: 8080 });

    const app = express();
    app.use(
      session({
        secret: 'SUPER_SECRET',
        resave: false,
        saveUninitialized: false,
      }),
    );

    // Serve bootstrap files
    const bootstrapPath = path.join(PROJECT_ROOT, 'node_modules', 'bootstrap', 'dist');
    app.use('/bootstrap', express.static(bootstrapPath));

    // Serve jquery - Hello darkness, my old friend, I've come to talk with you again
    const jqueryPath = path.join(PROJECT_ROOT, 'node_modules', 'jquery', 'dist');
    app.use('/jquery', express.static(jqueryPath));

    // // Serve static sites
    // const staticSitesPath = path.join(PROJECT_ROOT, 'static-sites');
    // app.use('/', express.static(staticSitesPath));
    app.use(indexRouter);

    // Serve assets
    const assetsPath = path.join(PROJECT_ROOT, 'assets');
    app.use('/assets', express.static(assetsPath));

    app.use('*', (req, res) => {
      res.status(404).send('404');
    });

    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(`Server could not start because of an error: ${error.message}`);
  }
}

main();
