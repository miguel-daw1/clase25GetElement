/*apuntar a un elemento que tiene un id llamado titulo */
//del documento necesito obtener un elemento que tiene id "titulo"

    //document.getElementById("titulo")
/*obtener el texto que tiene ese elemento
 para eso usamos innerText
*/
//document.getElementById("titulo").innerText
/*para mostrar en la consola usamos console.log(lo que quermos mostrar) */
const texto=document.getElementById("titulo").innerText
document.getElementById("titulo").innerText="laptop"
console.log(texto)

