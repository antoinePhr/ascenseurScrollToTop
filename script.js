var html = document.querySelector('html')
var porteG = document.querySelector('.porteG')
var porteD = document.querySelector('.porteD')
var cadre = document.querySelector('.cadre')
var flecheMonte = document.querySelector('.flecheMonte')
var containerAsc = document.querySelector('.ascenseurContainer')
var btnCoteVert = document.querySelector('.btnCoteVert')
var ascAppear = document.querySelector('.ascAppear')
var flecheMonteVerte = document.querySelector('.flecheMonteVerte')
var flecheDefaultBackToTop = document.querySelector('.back-to-top')

if (window.matchMedia("(min-width: 800px)").matches) {
  flecheMonte.style.display="block"
  flecheDefaultBackToTop.style.display="none"
  window.addEventListener('scroll', function(){
  	if(window.scrollY > 500){
      ascAppear.style.opacity="1";
      ascAppear.style.visibility="visible";
    }
    else if(window.scrollY < 500){
       ascAppear.style.opacity="0";
       ascAppear.style.visibility="hidden";
    }
  })
}

cadre.addEventListener('click', function(){
 window.scrollTo(0,0)
})

cadre.addEventListener('mouseover', function() {
    porteG.classList.add('animAscenseur')
    porteD.classList.add('animAscenseur')
    html.style.scrollBehavior="smooth" /* ---> scroll smooth sinon interfère avec le menu*/
    setTimeout(function(){ 
    	containerAsc.style.opacity='1';
      	btnCoteVert.style.display="block";
      	flecheMonte.style.display="none";
      	flecheMonteVerte.style.display="block"; 	
    }, 500);
})

cadre.addEventListener('mouseleave', function() {
    porteG.classList.remove('animAscenseur')
    porteD.classList.remove('animAscenseur')
   	html.style.scrollBehavior="unset"
    setTimeout(function(){ 
    	containerAsc.style.opacity='.6';
      	btnCoteVert.style.display="none";
      	flecheMonte.style.display="block";
        flecheMonteVerte.style.display="none";
    }, 500);
})