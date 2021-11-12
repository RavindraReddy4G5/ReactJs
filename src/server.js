/* eslint-disable import/extensions */
/* eslint-disable no-console */
const express = require('express');
const { join } = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const port = process.env.SERVER_PORT || 3000;
const APIURL = process.env.API_URL || 'https://api.dev2.helixsense.com';
const MICROSOFTURL = 'https://login.microsoftonline.com';
const requests = require('./powerbi.js');

const corsConfig = {
  origin: process.env.REACT_APP_WEB_URL || 'http://localhost:3010',
  credentials: true,
};

app.use(cors(corsConfig));

app.use(morgan('dev'));
app.use(express.static(join(__dirname, 'dist')));

app.use('/api', createProxyMiddleware({
  target: APIURL,
  changeOrigin: true,
}));

app.use('/oauth2/token/', requests.microsoftRequest);

app.use('/common', createProxyMiddleware({
  target: MICROSOFTURL,
  changeOrigin: true,
}));

app.use('/web', createProxyMiddleware({
  target: APIURL,
  changeOrigin: true,
}));

app.use((_, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
