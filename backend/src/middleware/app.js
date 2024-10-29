const express = require('express');
const cors = require('cors');

const app = express();

// Konfigurasi CORS
const corsOptions = {
  origin: 'http://localhost:3000', // URL frontend Anda
  credentials: true, // Izinkan mengirim cookies
};

app.use(cors(corsOptions));

// Rute lainnya
app.get('/api/v1/tasks', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
