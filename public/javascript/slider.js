const slider = document.getElementsByClassName("slider_wrap")[0];
const sliderItems = slider.children;

console.log(sliderItems);
var indexCount = 2;

setInterval(() => { 
    if(indexCount === sliderItems.length) {
        sliderItems[sliderItems.length -1].classList.remove("show");
        sliderItems[sliderItems.length -2].classList.remove("hide");
        indexCount = 2;
    }

    sliderItems[indexCount].classList.add("show");

    sliderItems[indexCount - 1].classList.add("hide");
    sliderItems[indexCount - 1].classList.remove("show");

    sliderItems[indexCount - 2].classList.remove("hide");

    indexCount++;

}, 5000);
