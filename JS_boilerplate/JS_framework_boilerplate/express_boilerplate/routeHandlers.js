//You can provide multiple callback functions that behave like middleware to handle a request. 
//The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. 
//You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.
//Route handlers can be in the form of a function, an array of functions, or combinations of both, as shown in the following examples.

app.get('/example/a', function (req,res) {
    res.send('Hello from A!')
})

//More than one callback function can handle a route (make sure you specify the next object). i.e.
app.get('/example/b', function (req,res,next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req,res){
        res.send('Hello from B!')
})

//An array of callback functions can handle a route. For example: 
var cb0 = function (req, res, next){
    console.log('CB0')
    next()
}

var cb1 = function (req,res) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {

res.send('Hello from C')
}
app.get('/example/c' [cb0, cb1, cb2])

//A combination of independent functions and arrays of functions can handle a route. i.e.
var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req,res) { 
    res.send('Hello from D!')
})

//You can create chainable route handlers for a route path by using app.route(). 
app.route('/book').get(function (req, res) {
    res.send('Get a random book')
})
.post(function (req,res){
    res.send('Add a book')
})
.put(function (req,res){
    res.send('Update the book')
})

//The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.
//Create a router file named birds.js in the app directory, with the following content:

var express = require('express')
var router = express.Router()

//middleware that is specific to this router
router.use(function timelog (req, res, next){
    console.log('Time: ', Date.now())
    next()
})

//define the home page route
router.get('/', function (req,res){
    res.send('About birds')
})

module.exports = router

//Then, load the r outer module in the app:
var birds = require('./birds')

app.use('/birds', birds)