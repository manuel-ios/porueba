document.getElementById("Info").innerHTML= "Codigo Tranquilito"
document.getElementById("Info").style.color = "red" 
document.getElementById("Info").style.fontSize = "30px"
var elemento = document.getElementById("Elemento")
elemento.innerHTML =  "Hola Mundo"  
elemento.style.color = "Blue"
elemento.style.fontSize = "41px"

var element =  document.getElementById("Element")
element.innerHTML  = "Primer ELemento getELementById"
element.style.color = "purple"
element.style.fontFamily  = "cursive"
element.style.fontSize = "30px"


// Quey Selectorr
//Se enfoca, el primer sleector

function mifuncion()
{
    document.querySelector(".miClass").style.background ="Yellow"
}
function Num(){
    let texto 
    let Copia =  document.getElementById("numero").value;
   console.log(Copia)
    if(Copia >1 && Copia <9 ){
        texto = "Input Valido"
        document.getElementById("Texto").innerHTML = texto;
        document.getElementById("Texto").style.color = "Green"
        console.log(texto)
    }
    else{
        texto = "Input inValido"
        document.getElementById("Texto").innerHTML = texto
        document.getElementById("Texto").style.color =  "Red"
    }

}