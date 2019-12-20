// core
const http = require('http');
const path = require('path');
// 3pp
const portfinder = require('portfinder');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const FileStore = require('session-file-store')(session);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rootRouter = require('./routes/root.routes');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const MONGODB_NAMESPACE = 'bme-server-js-songbook';

async function main() {
  try {
    // connect to the database
    mongoose.connect(`mongodb://localhost:27017/${MONGODB_NAMESPACE}`);

    const port = await portfinder.getPortPromise({ port: 8080 });

    const app = express();
    app.use(morgan('dev'));
    app.use(bodyParser());

    app.set('view engine', 'ejs');
    app.set('views', path.join(PROJECT_ROOT, 'src', 'views'));

    // session handling
    const fileStoreOptions = {
      path: path.join(PROJECT_ROOT, '.sessions'),
    };

    app.use(
      session({
        secret: 'SUPER_SECRET',
        resave: false,
        saveUninitialized: false,
        name: 'connect.songbook.sid',
        store: new FileStore(fileStoreOptions),
      }),
    );

    // Serve bootstrap files
    const bootstrapPath = path.join(PROJECT_ROOT, 'node_modules', 'bootstrap', 'dist');
    app.use('/bootstrap', express.static(bootstrapPath));

    // Serve jquery - Hello darkness, my old friend, I've come to talk with you again
    const jqueryPath = path.join(PROJECT_ROOT, 'node_modules', 'jquery', 'dist');
    app.use('/jquery', express.static(jqueryPath));

    // Serve styles
    app.use(express.static(path.join(PROJECT_ROOT, 'src', 'style')));

    // // Serve static sites
    // const staticSitesPath = path.join(PROJECT_ROOT, 'static-sites');
    // app.use('/', express.static(staticSitesPath));
    app.use(rootRouter);

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
