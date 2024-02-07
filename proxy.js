const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://pro-api.coinmarketcap.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/v1'
  },
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('X-CMC_PRO_API_KEY', '9834327a-fac9-446d-817a-b7bad05c747a'); 
  },
  onProxyRes(proxyRes, req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  }
}));

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});