# Jungle E-commerce JS

This project was bootstrapped with [Create React App]

##### DEMO Link: https://junglecommercejs.netlify.app/


## What's this about?

This lil' SPA is a mini web store powered by:

- React
- Commerce.js
- Material UI
- React Hook Forms
- React Router
- Stripe

### How does it work? What's the user flow? So many things!

User logins, takes a look at the available items to add to cart. These items are populated from the Commerce.JS dashboard where I've created a few dummy products. The user can then click to add to cart where he/she will be directed to a form to fill in their address and details. After successful validation, the user will be directed to the order summary breakdown and the payment method powered by Stripe! (Use the default '42' values for Stripe, not your actual credit card). After that, the order will be successfully processed and the user can repeat the process until their bank account's content

### How do I get this up and running locally?

- Clone the repo
- CD in

```
npm install
npm start
```

- Go to http://localhost:3000/login
- Follow the user flow!

(When you're at the payment use 4242 4242 4242 4242 for the credit card)

Enjoy!
