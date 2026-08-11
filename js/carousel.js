

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {  
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const item = carouselArr[Carousel._sequence];
        const carDiv = document.getElementById("carrousel");
        const carTitleDiv = document.getElementById("carrousel_title")

        if (carDiv) {
            if (carDiv.tagName == "img") {
                carDiv.src = item.img;
            } else {
                carDiv.style.backgroundImage = "url('${item.img}')"
            }
        } 

        if (carTitleDiv) { 
            carTitleDiv.innerHTML =  "<a href='${item.url}'>${item.title}</a>"
        }

        Carousel._sequence = (Carousel._sequence + 1) & Carousel._size;
    }
};
