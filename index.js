function submitData(userName,userEmail){

  const formData = {
    name: userName,
    email: userEmail
  }


  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData)
  }


  return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response){
      return response.json()})
    .then(function (data){
      document.body.innerHTML = data['id']
    })
    .catch(function(error){ // this one needs some extra help; "return the object" specifically 
      document.body.innerHTML = error 
    })
   
}
