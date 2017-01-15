import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';
import morgan from 'morgan';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(morgan('dev'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '/src/index.html'));
});

app.listen(process.env.PORT || port);