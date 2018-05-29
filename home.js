let imgs = document.querySelectorAll('.fone2');
let slider = 0;
function avancarSlide(){
  imgs[slider].style.display = 'none';
  slider++;
  if(slider >= imgs.length){
    slider = 0;
  }
  imgs[slider].style.display = 'block';
}
setInterval(avancarSlide, 2000);