let btnMobile = document.querySelector("#btn-mobile");

btnMobile.addEventListener("click", ()=> {
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle("active");
  changeButtonMenu(btnMobile);
})

const changeButtonMenu = (button) => {
  if(button.classList.contains("fa-bars")){
    button.classList.remove("fa-bars");
    button.classList.add("fa-times");
  }else{
    button.classList.remove("fa-times");
    button.classList.add("fa-bars");
  }
}