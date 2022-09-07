async function init(){
    try {
   //await states js does not run any other function until the promise is resolved
   const response= await fetch("https://dog.ceo/api/breeds/list/all");
   const data =await response.json()
   createBreedList(data.message)
    }
    catch (error){
console.log ("Problem accessing the breedlist")
}
 }
 init()  
 function createBreedList(breedList){
    document.getElementById("breed").innerHTML=`
    <select onchange="displayByBreed(this.value)">
            <option>Choose a dog breed</option>
            ${Object.keys(breedList).map(function(breed){
             return `<option>${breed}</option>`
            }).join('')}
    
          </select>
    `
    }
async function displayByBreed(breed){
        if (breed !=="Choose a dog breed"){
        const response=await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data=await response.json()
        console.log(data.message)
 }
}