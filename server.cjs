<<<<<<< HEAD
const express = require("express")
const Razorpay = require("razorpay")
const cors = require("cors")
require("dotenv").config();

// import express from 'express'
// import Razorpay from 'razorpay'
// import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config();


const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    const options = req.body;
    const orders = await razorpay.orders.create(options);

    if(!orders) {
        return res.status(500).send("Error")
    }

    res.json(orders)
    } catch (error) {
        res.status(500).send("Error")
    }
   
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
=======
const express = require("express")
const Razorpay = require("razorpay")
const cors = require("cors")
require("dotenv").config();

// import express from 'express'
// import Razorpay from 'razorpay'
// import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config();


const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    })

    const options = req.body;
    const orders = await razorpay.orders.create(options);

    if(!orders) {
        return res.status(500).send("Error")
    }

    res.json(orders)
    } catch (error) {
        res.status(500).send("Error")
    }
   
})

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
>>>>>>> 1a30083cb2da827df8bc64b5fd53f98dc7000b20
})