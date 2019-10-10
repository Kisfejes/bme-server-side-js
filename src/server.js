// core
const http = require('http');
const path = require('path');
// 3pp
const portfinder = require('portfinder');
const express = require('express');

const PROJECT_ROOT = path.resolve(__dirname, '..');

async function main() {
  try {
    const port = await portfinder.getPortPromise({ port: 8080 });

    const app = express();
    // Serve bootstrap files
    const bootstrapPath = path.join(PROJECT_ROOT, 'node_modules', 'bootstrap', 'dist');
    app.use('/bootstrap', express.static(bootstrapPath));

    // Serve jquery
    const jqueryPath = path.join(PROJECT_ROOT, 'node_modules', 'jquery', 'dist');
    app.use('/jquery', express.static(jqueryPath));

    // Serve static sites
    const staticSitesPath = path.join(PROJECT_ROOT, 'static-sites');
    app.use('/', express.static(staticSitesPath));

    // Serve assets
    const assetsPath = path.join(PROJECT_ROOT, 'assets');
    app.use('/assets', express.static(assetsPath));

    const server = http.createServer(app);
    server.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(`Server could not start because of an error: ${error.message}`);
  }
}

main();
