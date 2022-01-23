const xhr = new XMLHttpRequest();
//The open method initializes as a 'POST' to the given URL of the external resource, and uses the true boolean to make it asynchronous.
xhr.open('POST', url, true);
//"setRequestHeader" establishes info about the sender and request, it must be called after the open method but before the send method
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//"onreadystatechange" is an event listener the handles a change in the state of request
xhr.onreadystatechange = function () {
//ready state of 4 means the operation is complete and a status of 201 indicates a successful request.
  if (xhr.readyState === 4 && xhr.status === 201){

    const serverResponse = JSON.parse(xhr.response);

    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' ******* ' });

xhr.send(body);