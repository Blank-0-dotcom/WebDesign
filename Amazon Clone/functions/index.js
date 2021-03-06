const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HV8DrDdAHiXHL9edUH9xTUe3mpNsWn8wyFOUhYltOfFGSEueYPHQN6pp5JV1qWwTlYHnqdcBj2CUWkhVYbj2Omq00v36dXdTI')

// API

// - App config 
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/challenge-4859f/us-central1/api
