async function init(){
    try {
   //await states js does not run any other function until the promise is resolved
   const response= await fetch("https://dog.ceo/api/breeds/list/all");
   const data =await response.json()
   console.log(data.message)
    }
    catch (error){
console.log ("Problem accessing the breedlist")
}
 }