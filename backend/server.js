const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Telegram Mini App data validation endpoint
app.post('/api/auth', (req, res) => {
  const { initData } = req.body;
  // TODO: Validate initData with Telegram bot token
  console.log('Telegram initData received:', initData);
  res.json({ success: true, user: { id: 12345, username: 'test' } });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'KrakenPSN Drops Backend' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 KrakenPSN Backend running on port ${PORT}`);
});
