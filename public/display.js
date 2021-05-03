// window.addEventListener('load', () => {
//   const show = document.getElementById("show");
//   const menu = [ 
//     document.getElementById("create"),
//     document.getElementById("find"),
//     document.getElementById("update"),
//     document.getElementById("delete"),
//   ]
//   console.dir(menu)
//   for (let action of menu) {
//     action.addEventListener("click", () => {
//       if (action.id == "create") {
//         show.children.write("<%- include('include/_create') %>")
        
//         // fetch('api/create') 
//       }
//     })
//   }
// })