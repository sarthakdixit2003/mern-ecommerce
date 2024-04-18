const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const path = require('path');
const productsRoute=require('./routes/products');
const cartRoutes=require('./routes/cart');

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
	.then((result) => {
		console.log('connected');
		app.listen(5000);
	})
	.catch((error) => console.log(error));

// console.log(productsRoute);
app.use('/server/products', productsRoute);
app.use('/server/cart', cartRoutes);
