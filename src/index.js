import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import http from 'http';
import { fastify } from 'fastify';
import fastifyStatic from 'fastify-static';

import './env.js';
import { connectDB } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
};

const app = fastify();

// const server = http.createServer((req, res) => {
//   console.log('req', req.url);

//   let filePath = '.' + req.url;
//   if (filePath === './') filePath = path.join(__dirname, 'dist', 'index.html');

//   const extension = path.extname(filePath);
//   //   console.log(typeof extension);

//   const contentType = MIME_TYPES[extension];

//   fs.readFile(filePath, (error, content) => {
//     if (error) {
//       console.log(error);
//       if (error.code == 'ENOENT') {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('no file');
//       } else {
//         res.writeHead(500);
//         res.end(
//           'Sorry, check with the site admin for error: ' + error.code + ' ..\n'
//         );
//       }
//     } else {
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(content, 'utf-8');
//     }
//   });
// });

// app.listen(3000, (err, address) => {
//   console.log(`server is listening at ${port}`);
// });

const startAppVanilla = async () => {
  try {
    server.get;
    await server.listen(3000);
    console.log('server running at port 3000');
  } catch (error) {
    console.log(error);
  }
};

const startApp = async () => {
  try {
    app.register(fastifyStatic, {
      root: path.join(__dirname, 'dist'),
    });

    // declare a route
    // app.get('/', (req, res) => {
    //   res.send({ hello: 'world' });
    // });

    app.get('/about', (req, res) => {
      res.send({ hello: 'world' });
    });

    await app.listen(3000);

    console.log(process.env.MONGO_URL);
    console.log('Server listening on port: 3000 👌');
  } catch (error) {
    console.log(error);
  }
};

connectDB().then(() => {
  startApp();
  //   startAppVanilla();
});
