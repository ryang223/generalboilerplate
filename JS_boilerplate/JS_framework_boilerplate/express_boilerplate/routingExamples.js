
//GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

//POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

//additionally; the special routing method, app.all() is used to load middleware functions at a path for all HTTP request methods.
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() //pass control to the next handler
}) 

//NOTE: If you need to use the dollar character ($) in a path string, 
//enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.


//This route path will match requests to the root route, / .
app.get('/', function (req, res){
    res.send('root')
})

//This route path will match requests to /about .
app.get('/about', function (req, res) {
    res.send('about')
})

//This route path will match requests to /random.text
app.get('/random.text', function(req, res) {
    res.send('random-text')
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Routes based on string patterns

//This route path will match acd and abcd 
app.get('/ab?cd', function (req,res) {
    res.send('ab?cd')
})

// This route path will match abcd, abbcd, abbbcd and so on.
app.get('/ab+cd', function (req, res){
    res.send('ab+cd')
})

//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res){
    res.send('/ab*cd')
}) 

//This route path will match /abe and /abcde
app.get('/ab(cd)?e', function (req,res){
    res.send('ab(cd)?e')
})

//Examples of route paths based on regular expressions

//This route path will match anything with an "a"  in it
app.get(/a/, function (req,res) {
    res.send('/a/')
})

//This  route pa th will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req,res) {
    res.send('/.*fly$/')
})