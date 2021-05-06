$("#createUser").submit(function(event){
  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
  })
  console.log(data)   
  var request = {
    "url": `http://localhost:3000/api/users/`,
    "method":"POST",
    "data":data,
  }
  $.ajax(request).done(function(response) {
    userId = response.id
    console.log(userId)
    alert("User created succesfully")
    window.location.replace("http://localhost:3000/createbio")
  })
})

$("#updateUser").submit(function(event){
  event.preventDefault() 
  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
  })
  console.log(data)   
  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method":"PUT",
    "data":data,
  }

  $.ajax(request).done(function(response) {
      alert("Data updated succesfully")
  });
})

$("#userBio").submit(function(event){
  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
  })
  data['userId'] = userId
  alert("continue?");
  var request = {
    "url": `http://localhost:3000/api/biodata/`,
    "method":"POST",
    "data":data
  }
  $.ajax(request).done(function(response) {  
    alert("User Biodata Created Succesfully!");
  })
})

$("#updateuserBio").submit(function(event){
  event.preventDefault()
  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
  })
  console.log(data)   
  var request = {
    "url": `http://localhost:3000/api/biodata/${data.userId}`,
    "method":"PUT",
    "data":data,
  }

  $.ajax(request).done(function(response) {
    console.log(request.params)
    alert("Biodata updated succesfully")
  });
})

// Delete a user
$ondelete = $('.table tbody a.delete');
$ondelete.click(function(){
  var id = $(this).attr('data-id')

  var request = {
    "url": `http://localhost:3000/api/users/${id}`,
    "method": "DELETE",
  }
  if (confirm("Delete this user?")) {
  $.ajax(request).done(function(response) {
    alert("User Deleted")
    location.reload()
  });
  }
})
