//middle-ware handles mulitple requests to the /user/:id path
app.get('/user/:id', function (req,res,next){
    //if the user ID is 0, skip to the next route
    if(req.params.id === '0') next ('route')
    // otherwise pass the control to 
    //the next middleware function in the stack
    else next()
},function (req,res,next) {
    res.send('regular')
})
// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req,res,next){
    res.send('special')
})

//middle-ware can also be declared 
//in an array for re-useability
function logOriginalUrl (req,res,next){
    console.log('Request URL:', req.originalUrl)
    next()
}
 function logMethod (req,res,next){
     console.log('Request Type:', req.method)
     next()
 }

 var logStuff = [logOriginalUrl, logMethod]
 app.get('/user/:id', logStuff, function (req,res,next){
     res.send('User Info')
 })