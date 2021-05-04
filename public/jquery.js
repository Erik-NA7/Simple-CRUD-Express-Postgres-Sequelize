$("#createUser").submit(function(event){
    alert("User Created Succesfully!")
})

$("#userBio").submit(function(event){
    alert("User Biodate Created Succesfully!")
})

$("#updateUser").submit(function(event){
    event.preventDefault();
    const unindexed_array = $(this).serializeArray();
    console.log(unindexed_array)
    
})

$("#updateuserBio").submit(function(event){
    alert("User Biodata Updated Succesfully!")
})