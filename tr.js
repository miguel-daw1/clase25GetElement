const algo=(nombre)=>`<h1> ${nombre} </h1>`

const boton = document.querySelector("#cambiar")
const texto = document.querySelector("#entrada")

boton.addEventListener("click",()=>{
    document.querySelector("#titulo").innerHTML=texto.value
})

