const userId = 0;

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

$("#userBio").submit(function(event){
  var unindexed_array = $(this).serializeArray();
  var data = {}
  $.map(unindexed_array, function(n,i){
      data[n['name']] = n['value']
  })
  data['userId'] = userId
  console.log(data)
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

$("#updateUser").submit(function(){
   
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

$("#updateuserBio").submit(function(event){
    alert("User Biodata Updated Succesfully!")
})

$("#updateuserBio").submit(function(event){
    alert("User Biodata Updated Succesfully!")
  })

$ondelete = $(".table tbody td a.delete");
$ondelete.click(function(){
  var id = $(this).attr("data-id")
  var request = {
    "url": `http://localhost:3000/api/users/${id}`,
    "method":"DELETE",
  }
  
  if(confirm("Delete this user?")){
    $.ajax(request).done(function(response){
      alert("User deleted succesfully");
      location.reload() 
    }) 
  } 
})
