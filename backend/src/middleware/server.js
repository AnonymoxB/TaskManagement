const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

// Konfigurasi CORS
const corsOptions = {
  origin: 'http://localhost:3000', // URL frontend Anda
  credentials: true, // Izinkan mengirim cookies
};

app.use(cors(corsOptions));

router.get('/api/v1/tasks', (ctx) => {
  ctx.body = { message: 'CORS is working!' };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
