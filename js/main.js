window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function(){
        handleChangeSlide(-1);
    });
    [... dotItems].forEach(item => item.addEventListener("click", function(e){
        [ ... dotItems].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)}`;
      })
    );

    function handleChangeSlide(direction) {
        if (direction === 1) {
           if (index >= slidesLength - 1) {
               index = slidesLength - 1;
               return;
           }
           positionX = positionX - sliderItemWidth;
           sliderMain.style = `transform: translateX(${positionX}px)`;
           index++;
        } else if (direction === -1) {
           if (index <= 0) {
               index = 0;
               return;
           }
           positionX = positionX + sliderItemWidth;
           sliderMain.style = `transform: translateX(${positionX}px)`;
           index--;
        }
        [ ... dotItems].forEach(el => el.classList.remove("active"));
        dotItems[index].classList.add("active")
    }
   
});
function changeMenu(){
    const motobikeProducts = document.querySelector(".motorbike-products");
    const carProducts = document.querySelector(".car-products");
    motobikeProducts.style.display = "grid";
    carProducts.style.display = "none";
}

function changeMenu2(){
    const motobikeProducts = document.querySelector(".motorbike-products");
    const carProducts = document.querySelector(".car-products");
    motobikeProducts.style.display = "none";
    carProducts.style.display = "grid";
}

// NEWS SLIDE
var images = [
    "./assets/img/activities/motorsport.jpg",
    "./assets/img/activities/trongrung.jpg",
    "./assets/img/activities/hotrocongdong.png",
    "./assets/img/activities/hotrogiaoduc.png",
    "./assets/img/activities/hotrogiaoduc2.jpg",
    "./assets/img/activities/laixeantoan.jpg",
    
];
var i = 0;
function slides(){
    document.getElementById("slideimage").src = images[i];
    if(i < (images.length - 1)){
    i++;
    }
    else{
    i=0;
    }
}
setInterval(slides, 3000);

// LOG IN - SIGN IN
function login(){
     const login = document.getElementById("show-login");
}


window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    const headerSearch = document.getElementById("header-search");
    const nav = document.getElementById("nav");
    const imgLogo = document.getElementById("img-logo");
    const gototop = document.getElementById("gototop");
    if (document.documentElement.scrollTop > 100 || document.body.scollTop > 100) {
        gototop.style.display = "block"
        headerSearch.style.display = "none";
        nav.style.position = "fixed";
        nav.style.left = 0;
        nav.style.right = 0;
        nav.style.zIndex = 50;
        nav.style.backgroundColor = "rgb(160, 92, 92, 0.8)";
      
    } else {
        headerSearch.style.display = "flex";
        nav.style.backgroundColor = "rgb(177, 34, 34)";
        gototop.style.display = "none";
        imgLogo.style.zIndex = 100;
    }
}
    function goToTop(){
        var timer = setInterval(function(){
            document.documentElement.scrollTop--;
            if(document.documentElement.scrollTop <= 0)
                clearInterval(timer);
        },1);
    
    function fun(){
        console.log("Hello");
        window.location.href= "./Ah";
    }
}
       