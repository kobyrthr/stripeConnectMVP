const express = require('express')
const app = express()
const PORT = 3000

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const account = async ()=>{
     data = await stripe.accounts.create({type: 'express'});
    console.log(data)
}

account()    

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})