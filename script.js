document.getElementById("siguiente").style.display = 'none'


document.getElementById("cultura").onclick = function() {
    document.getElementById("caja").innerHTML = '<img src="./Abner Villanueva Andia - capitan-america.png" alt="">';
    document.getElementById("siguiente").style.display = 'block'
    document.getElementById("siguiente").nodeValue = 'salir'
}
document.getElementById("mate").onclick = function() {
    document.getElementById("caja").innerHTML = '<img src="./Abner Villanueva Andia - capitan-america.png" alt="">';
    document.getElementById("siguiente").style.display = 'block'
    document.getElementById("siguiente").innerHTML = "salir"
}
document.getElementById("ciencias").onclick = function() {
    document.getElementById("caja").innerHTML = '<img src="./Abner Villanueva Andia - capitan-america.png" alt="">';
    document.getElementById("siguiente").style.display = 'block'
    document.getElementById("siguiente").innerHTML = "salir"
}