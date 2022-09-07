let timer
let removeFirstImageDelay
function fetchData(){
    document.addEventListener("DOMContentLoaded", init);
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
}
fetchData()
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
displaySlides(data.message)
}


}
function displaySlides(images){
let currentPosition=0
clearInterval(timer)
clearTimeout(removeFirstImageDelay)

if (images.length > 1){
  document.getElementById("slideshow").innerHTML=`
<div class="slide" style="background-image: url('${images[0]}')"></div>
<div class="slide" style="background-image: url('${images[1]}')"></div>
`
currentPosition +=2
if (images.length == 2)currentPosition=0
timer = setInterval(nextSlide, 3000)
}
else {
  document.getElementById("slideshow").innerHTML=`
  <div class="slide" style="background-image: url('${images[0]}')"></div>
  <div class="slide"></div>
  `
}

function nextSlide(){
  document.getElementById("slideshow").insertAdjacentHTML("beforeend", `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`)
removeFirstImageDelay=setTimeout(function(){
  document.querySelector(".slide").remove()
}, 1000)

if (currentPosition +1 >=images.length){
   currentPosition=0
}
else{
  currentPosition++
}
}
}
