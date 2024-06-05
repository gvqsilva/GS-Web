// Alerta na página principal
window.onload = function() {
    alert("Realize o login para acessar o quiz!");
  }
  
  
//Slideshow
  class MobileNavbar {
      constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }
    
      handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
      }
    
      addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
      }
    
      init() {
        if (this.mobileMenu) {
          this.addClickEvent();
        }
        return this;
      }
    }
    
    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".nav-list",
      ".nav-list li",
    );
    mobileNavbar.init();

//Função da página login
function validar(){

  //declarando as variaveis 
  let usuario =document.getElementById("usuario").value;
  let senha =document.getElementById("senha").value;

  if(usuario ==="Admin" && senha ==="12345"){
      window.open("quiz.html")
  }else{
      alert("usuario e senha inválidos")
  }
}