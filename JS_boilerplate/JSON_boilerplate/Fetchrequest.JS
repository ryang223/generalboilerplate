//The fetch(URL) makes a GET request to the URL specified. The method returns a promise
fetch('/json/****.json')
//After a Promise is returned, if the request was successful, the then method is executed, which takes the response and converts it to JSON format.
  .then(response => response.json())
  //THEN a promise is returns the JS object you are looking for in the second object of this second "then"
  .then(data => {
      //Finally it selects the element that will receive the data by using "document.getElementByID"
      document.getElementById('message').innerHTML = JSON.stringify(data);
  })