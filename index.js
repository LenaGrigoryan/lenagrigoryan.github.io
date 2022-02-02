// ___________Menu show and hidden _____________
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      navItems = document.getElementsByClassName("nav__link");

//________________menu show______________________

 if(navToggle){
     navToggle.addEventListener('click',()=>{
         navMenu.classList.add('show-menu')
     });
 };

//_______________menu hidden__________________

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    });
};

function menu() {
    navMenu.classList.remove('show-menu')  
};

// ______________CAROUSEL____________
document.querySelectorAll(".carousel_one").forEach(carousel => {
  const items = carousel.querySelectorAll(".carousel__item");
  const arrows = document.querySelectorAll(".arrows")
  const buttonsHtml = Array.from(items, () => {
      return `<span class = "carousel__span"> </span>`;
  });

  carousel.insertAdjacentHTML("beforeend", `
  <div class="carousel__nav">
    ${ buttonsHtml.join("")}
</div>
`);
const buttons = carousel.querySelectorAll(".carousel__span");

buttons.forEach((button,  i) =>{
    button.addEventListener("click", () =>{
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(button => button.classList.remove("carousel__span--selected"));
        
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__span--selected"); 
    })
})
 arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () =>{
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        arrows.forEach(arrow => arrow.classList.remove("arrow-selected"));

        items[i].classList.add("carousel__item--selected");
        arrow.classList.add("arrow-selected")
    })
}) 
});

//____________________ERROR OPEN________________
const mainPage = document.querySelector(".main__pages"),
      mainButtons = document.querySelectorAll(".buttons"),
      mainError = document.querySelector(".error");

function mainClose() {
    mainPage.style.display = "none";
    mainError.style.display = "block"
}
function mainOpen() {
    mainError.style.display = "none"
    mainPage.style.display = "block";
}


  
 



