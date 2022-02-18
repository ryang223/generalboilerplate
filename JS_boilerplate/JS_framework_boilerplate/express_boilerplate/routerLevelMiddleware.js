//Router-level middleware works in the same way as application-level 
//middleware except it is bound to an instance of express.Router()
//The following is the same middleware system as "multi-request-routing.js but by using router-level middleware"
var express = require('express')
var app = express()
var router = express.Router()

//a middleware function with no mount path. This code is executed 
//for every request to the router
router.use(function(req,res,next){
    console.log('Time: ', Date.now())
    next()
})

//a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req,res,next){
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req,res,next){
    console.log('Request Type:', req.method)
    next()
})

//a middleware sub-stack that handles GET requests to the /user/:id path
//middle-ware handles multiple requests to the /user/:id path
app.get('/user/:id', function (req, res, next) {
    //if the user ID is 0, skip to the next route
    if(req.params.id === '0') next('route')
    // otherwise pass the control to 
    //the next middleware function in the stack
    else next()
},function (req, res, next) {
    //else, render a regular page
    res.send('regular')
})

//handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next){
    console.log(req.params.id)
    res.render('special')
})

//mount the router on the app
app.use('/', router)

////////////////////////////////////////////////////////////////////////////////////////
//To skip the rest of the router's middleware functions, call next('router') 
//to pass control back out of the router instance
var express = require('express')
var app = express()
var router = express.Router()

//predicate the router with a check and bail out when needed
    router.use(function (req, res, next){
        if(!req.headers['x-auth']) return next('router')
        next()
    })

    router.get('/user/:id', function (req, res){
        res.send('hello, user!')
    })

    //use the  router and 401 anything falling through 
    app.use('/admin', router, function(req,res) {
        res.sendStatus(401)
    })

//Error handling must take four arguments including the next object even if not used at all times
app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Seomthing broke!')
})