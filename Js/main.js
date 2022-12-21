

 const logo =document.querySelector(".logo");
 const dropdown =document.querySelector(".dropdown");

 logo.addEventListener("click", () => {
    hundleMenu();
 });
 function hundleMenu() {
    logo.classList.toggle("is-active");
    dropdown.classList.toggle("is-active");
 }

/***************************/


 let up = document.querySelector(".up");

 window.onscroll = function(){
   if(this.scrollY >= 400){
      up.classList.add("show");
   }else{
      up.classList.remove("show");
   }
 };

 up.onclick = function(){
   window.scrollTo({
      top:0,
      behavior: "smooth",
   });
 };