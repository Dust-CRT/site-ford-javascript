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
                Carousel.RenderDots();
                Carousel.UpdateDots();
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

        Carousel.UpdateDots(Carousel._sequence);
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }

    static ResetTimer(){
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function(){
            Carousel.Next();
        }, 5000);
    }

    static Prev(){
        Carousel._sequence = (Carousel._sequence - 2 + Carousel._size) % Carousel._size;
        Carousel.Next();
    }

    static ManualNext(){
        Carousel.Next();
        Carousel.ResetTimer();
    }

    static ManualPrev(){
        Carousel.Prev();
        Carousel.ResetTimer();
    }

    static Goto(index){
        Carousel._sequence = index;
        Carousel.Next();
        Carousel.ResetTimer();
    }

    static RenderDots(){
        let dotsHtml = "";
        for(let i = 0; i < Carousel._size; i++){
            dotsHtml += "<span class='carousel-dot' onclick='Carousel.Goto(" + i + ")'></span>";
        }
        document.getElementById("carousel-dots").innerHTML = dotsHtml;
    }

    static UpdateDots(currentIndex){
        let dots = document.querySelectorAll("#carousel-dots .carousel-dot");
        for(let i = 0; i < dots.length; i++){
            if(i === currentIndex){
                dots[i].classList.add("active");
            } else {
                dots[i].classList.remove("active");
            }
        }
    }
};