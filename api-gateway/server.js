import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express();

//// Route-to-target mapping
const proxyRoutes = {
    '/customerCareData': 'http://localhost:3000',
    '/invoiceData': 'http://localhost:3001',
    '/product': 'http://localhost:3002',
    '/razerpayData': 'http://localhost:3003',
    '/userData': 'http://localhost:3004'
};

// Apply proxy middleware for each route
for (const [route, target] of Object.entries(proxyRoutes)) {
    app.use(route, createProxyMiddleware({ target, changeOrigin: true }));
}
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production mode');
} else {
    console.log('Running in development mode');
}
app.listen(5000, () => {
    console.log('http://localhost:5000');
});