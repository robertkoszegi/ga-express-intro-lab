

// Require modules
const express = require('express');
const path = require('path');
const businessDb = require('./data/businesses-db')
 	
// Create the Express app
const app = express();
      
// Configure the app (app.set)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'));
      
// Mount middleware (app.use)
      
      
// Mount routes
// Home page:  
app.get('/', function(req, res) {
    res.send('<h1>Express Intro</h1>');
})
app.get('/businesses', function(req, res) {
    res.render('businesses/index', {
        businesses: businessDb.getAll()
    })
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});