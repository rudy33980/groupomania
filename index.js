require ("dotenv").config()
const express = require ("express") 
// on va chercher une fonction dans express 
const app = express() // on l'ivoque ici

const port = process.env.PORT || 3000
console.log("port:", process.env.PORT);