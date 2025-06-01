const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Express server is running!',
    timestamp: new Date().toISOString(),
    reactNative: 'Ready to connect',
  });
});

// API route for React Native app
app.get('/api/data', (req, res) => {
  res.json({
    data: 'Hello from Express server!',
    status: 'success',
    timestamp: new Date().toISOString(),
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({status: 'OK', service: 'Express + React Native'});
});

app.listen(port, () => {
  console.log(`🚀 Express server running on http://localhost:${port}`);
  console.log(`📱 React Native app can connect to this server`);
});
