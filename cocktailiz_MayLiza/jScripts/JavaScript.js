var picIndex = 1;
showPicSlide(picIndex);

function arrowControl(x) {
    showPicSlide(picIndex += x);
}

function currentPic(x) {
    showPicSlide(picIndex = x);
}

function showPicSlide(x) {
var mainPic = document.getElementsByClassName("picSlide");
var miniPics = document.getElementsByClassName("miniPic");
var cocktailN = document.getElementById("cocktailName");
  if (x > mainPic.length) {
    picIndex = 1
}
  if (x < 1) {
    picIndex = mainPic.length
}
  for (i = 0; i < mainPic.length; i++) {
    mainPic[i].style.display = "none";
  }
  for (i = 0; i < miniPics.length; i++) {
    miniPics[i].className = miniPics[i].className.replace(" active", "");
  }
  
  mainPic[picIndex-1].style.display = "block";
  miniPics[picIndex-1].className += " active";
  cocktailN.innerHTML = miniPics[picIndex-1].alt;
}