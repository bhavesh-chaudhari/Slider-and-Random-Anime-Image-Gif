const main = document.getElementById('main');
const sliderImg = document.getElementById("innerDiv2Img");

    var time = 7000;
    
   var x = window.matchMedia("(max-width: 600px)")
   myFunction(x) 
   function myFunction(x) {
  if (x.matches) { // If media query matches
    animationArray = [
     "slideVertically 6.9s ease-in-out infinite",
     "slideVerticallyInverse 6.9s ease-in-out infinite",
     "slideHorizontally 6.9s ease-in-out infinite",
     "slideHorizontallyInverse 6.9s ease-in-out infinite"
   ];
  } else {
    animationArray = [
     "slideVertically 5.6s ease-in-out infinite",
     "slideVerticallyInverse 5.6s ease-in-out infinite",
     "slideHorizontally 5.8s ease-in-out infinite",
     "slideHorizontallyInverse 5.8s ease-in-out infinite"
   ];
  }
}


   sfw = ["waifu","neko","shinobu","megumin","bully","cuddle","cry","hug","awoo","kiss","lick","smug","bonk","yeet","blush","smile","wave","highfive","handhold"]


    function changeImg(imgLink){

        randomWord = sfw[Math.floor(Math.random() * sfw.length)]
        image = `https://api.waifu.pics/sfw/${randomWord}`;

        fetch(image)
        .then(res=>res.json())
        .then(data=>{
            sliderImg.src = data.url;
        })

      sliderImg.style.animation = `${
        animationArray[Math.floor(Math.random() * animationArray.length)]
      }`;  

      setTimeout("changeImg()", time);
    }

changeImg()