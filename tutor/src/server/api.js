// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;
//const DIST_DIR = './dist';

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

//app.use(express.static(DIST_DIR));

//app.use('*', (req, res) => {
//    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
//});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
