=== server.js ===
/ serveur Express simple pour projet-vente /
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const products = require('./data/products.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(dirname, 'public')));

// Calcul livraison : base 1000 Ar + 300 Ar/km + 200 Ar/kg, express +2000 Ar
function calculateDelivery({ distance = 0, weight = 0, express = false }) {
 const base = 1000;
 const perKm = 300;
 const perKg = 200;
 let total = base + perKm * Number(distance) + perKg * Number(weight);
 if (express) total += 2000;
 return Math.max(0, Math.round(total));
   }

// Simulate payment (mock). Returns { success, provider, reference, status }
function simulatePayment(provider) {
 const reference = ${provider.toUpperCase()}-${uuidv4().split('-')[0]};
 // Simulate 90% success rate
 const ok = Math.random() < 0.9;
 return {
 success: ok,
 provider,
 reference,
 status: ok ? 'SUCCESS' : 'FAILED'
 };
   }

// API : list products
app.get('/api/products', (req, res) => {
 res.json(products);
});

// API : delivery estimation
app.post('/api/delivery', (req, res) => {
 const { distance, weight, express } = req.body;
 const delivery = calculateDelivery({ distance, weight, express });
 res.json({ delivery });
});
// API : checkout (mock payment)
app.post('/api/checkout', (req, res) => {
 try {
 const { cart = [], customer = {}, distance = 0, weight = 0, express = false, paymentMethod = 'mvola' } = req.body;
