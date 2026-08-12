

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {  

    static _sequence = 0;
    static _size = 0;
    static _interval = null;

    constructor(img, title, url) {
        this.img = img;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                carouselArr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ 
                    Carousel.Next(); 
                },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const item = carouselArr[Carousel._sequence];
        const carDiv = document.getElementById("carousel");
        const carTitleDiv = document.getElementById("carousel-title")

        if (carDiv) {
            if (carDiv.tagName == "IMG") {
                carDiv.src = item.img;
            } else {
                carDiv.style.backgroundImage = `url('${item.img}')`
            }
        } 

        if (carTitleDiv) { 
            carTitleDiv.innerHTML =  `<a href='${item.url}'>${item.title}</a>`
        }

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};
