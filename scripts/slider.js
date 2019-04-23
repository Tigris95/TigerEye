
sliderImages = document.querySelectorAll('.slide')

arrowRight = document.querySelector('#right-arrow')
arrowLeft = document.querySelector('#left-arrow')

current = 1;
function reset(){
for(i=0; i<sliderImages.length; i++){
  sliderImages[i].style.display = 'none'
}}



function slideLeft(){
  reset();
  sliderImages[current-1].style.display = 'block'
  current -- ;
  console.log(current)
}

function slideRight(){
  reset();
  
  sliderImages[current].style.display = 'block'
  current++
  console.log(current)
}



arrowRight.addEventListener('click', ()=>{
  if(current === sliderImages.length ){
    current=0;
  }
  slideRight()
})
//left click
arrowLeft.addEventListener('click', ()=>{
  if(current === 0 ){
    current = sliderImages.length
  }
  slideLeft()
  
})
function startSlide(){
  //console.log(sliderImages)
  reset()
  sliderImages[0].style.display = 'block'
}
startSlide()

//setInterval(function(){ slideLeft()}, 3000)
console.log(sliderImages)