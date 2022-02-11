//Route parameters are named URL segments that are used to capture the values specified at their position in the URL. 
//Captured values are populated in the the req.params object.

//To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
app.get('/users/:userId/books/:bookId', function (req, res){
    res.send(req.params)
})

//The name of route parameters must be made up of "word characters" ([A-Za-z0-9_]).
//Also since hyphen - and dot . are interpreted literally, they can be used along with route parameters for useful purposes. i.e:
//Route path: /flights/:from-:to
//Request URL: http://localhost:3000/flights/LAX-SFO
//req.params: { "from": "LAX", "to": "SFO" }

//Route path: /plantae/:genus.:species
//Request URL: http://localhost:3000/plantae/Prunus.persica
//req.params: { "genus": "Prunus", "species": "persica" }

//To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses(); i.e.
//Route path: /user/:userId(\d+)
//Request URL: http://localhost:3000/user/42
//req.params: {"userId": "42"}