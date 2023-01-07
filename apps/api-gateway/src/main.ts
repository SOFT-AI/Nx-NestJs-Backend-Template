/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

// Http proxy middleware
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3330;

  // Setup microservices url
  const AUTH_SVC = 'http://localhost:3331';

  app.use(
    '/auth',
    createProxyMiddleware({
      target: AUTH_SVC,
      changeOrigin: true,
      onProxyReq: function (proxyReq, req) {
        proxyReq.setHeader('user', 'influencerID');
        console.log('API gateway action');

        return proxyReq;
      },
      onProxyRes: function (proxyRes, req, res) {
        console.log('Proxy returned result');

        return proxyRes;
      },
      onError: function (err, req, res) {
        console.log("onError");
        
        res.writeHead(500, {
          'Content-Type': 'text/plain',
        });
        res.end(
          'Something went wrong. And we are reporting a custom error message.'
        );
      },
      auth: 'ajay:user',
      pathRewrite: {
        '^/api/old-path': '/api/new-path', // rewrite path
        '^/api/remove/path': '/path', // r
      },
      onClose: function (err) {
        console.log('Closed');
      },
    })
  );

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
