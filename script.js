'use script';
// elements

const sliderImageContainer = document.querySelector('.slider-img');

// gv
const data = ["image_00.jpg","image_01.jpg","image_02.jpg","image_03.jpg"];
let index = 0;
const imgLocation = "./image/slider-image/";

// functions
setInterval(()=>{
  if(index === data.length-1){
    index = 0;
  }else if(index < data.length){
    index += 1;
  }
  console.log(sliderImageContainer.src)
  sliderImageContainer.src = imgLocation + data[index];
  
},2000)