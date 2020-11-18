control = [];
let fallas = 0;
let cont = 0;
let contar = 0;
let selec = 1;
let a = 1;
let cor;

let pregunta1 = {
    "pregunta": '¿Quién es el autor de el Don Quijote de la Mancha?',
    "correcto": 'Miguel de Cervantes',
    "incorrecto1": 'Raphael Vellageto',
    "incorrecto2": 'Jorge Luis Borges'
}
let pregunta2 = {
    "pregunta": '¿Quién fue el primer hombre en pisar la luna?',
    "correcto": 'Neil Armstrong',
    "incorrecto1": 'Usain Bolt',
    "incorrecto2": 'Lance Armstrong'
}
let pregunta3 = {
    "pregunta": '¿Quién fue la primera mujer en ir al espacio?',
    "correcto": 'Valentina Tereshkova',
    "incorrecto1": 'Jessica Meir',
    "incorrecto2": 'Christina Koch'
}
let pregunta4 = {
    "pregunta": '¿En qué país se encuentra el Wembley Arena?',
    "correcto": 'Londres, en el Reino Unido',
    "incorrecto1": 'Estados Unidos',
    "incorrecto2": 'Francia'
}
let pregunta5 = {
    "pregunta": 'Según la Biblia, ¿quién traicionó a Jesús?',
    "correcto": 'Judas',
    "incorrecto1": 'Juan',
    "incorrecto2": 'Pedro'
}
let pregunta6 = {
    "pregunta": '¿Cuál es el libro sagrado del Islam?',
    "correcto": 'Corán',
    "incorrecto1": 'El Libro Negro',
    "incorrecto2": 'Atalaya'
}
let pregunta7 = {
    "pregunta": '¿Cuál es la capital de Turquía?',
    "correcto": 'Ankara',
    "incorrecto1": 'Otawa',
    "incorrecto2": 'Dakar'
}
let pregunta8 = {
    "pregunta": '¿En qué país se utilizó la primera bomba atómica en un contexto de combate?',
    "correcto": 'Japon-Hiroshima',
    "incorrecto1": 'Vietnam-Hanoi',
    "incorrecto2": 'Japon-Nagasaki'
}
let pregunta9 = {
    "pregunta": '¿Quién es el autor de Hamlet?',
    "correcto": 'William Shakespeare',
    "incorrecto1": 'Charles Dickens',
    "incorrecto2": 'Oscar Wilde'
}
let pregunta10 = {
    "pregunta": '¿Cómo se llama el estadio del F.C. Barcelona?',
    "correcto": 'Camp Nou',
    "incorrecto1": 'Maracana',
    "incorrecto2": 'El Monumental'
}
let pregunta11 = {
    "pregunta": '¿A cuánto equivale π?',
    "correcto": '3,141592',
    "incorrecto1": '3,149215',
    "incorrecto2": '3,144123'
}
let pregunta12 = {
    "pregunta": '7/5 + 2/3 - 1 =',
    "correcto": '16/15',
    "incorrecto1": '1',
    "incorrecto2": '17/15'
}
let pregunta13 = {
    "pregunta": '¿Qué formula es esta? S = π x R²',
    "correcto": 'Superficie de un círculo',
    "incorrecto1": 'Diámetro de un círculo',
    "incorrecto2": 'Volumen de un cilindro'
}
let pregunta14 = {
    "pregunta": '¿Qué expresa esta formula? e = mc²',
    "correcto": 'Equivalencia entre masa y energía',
    "incorrecto1": 'La teoría de la probabilidad',
    "incorrecto2": 'Volumen de un cubo'
}
let pregunta15 = {
    "pregunta": '¿Cuáles de los siguientes triángulos,según sus medidas son rectángulos?',
    "correcto": '3 cm, 4 cm, 5 cm',
    "incorrecto1": '3 cm, 4 cm, 7 cm ',
    "incorrecto2": '7 cm, 4 cm, 6 cm'
}
let pregunta16 = {
    "pregunta": 'Juan tiene 20 años menos que su padre y este tiene el triple de los años de su hijo. ¿Qué edad tienen cada uno?',
    "correcto": '10 juan, 30 el padre',
    "incorrecto1": '11 Juan, 31 el padre',
    "incorrecto2": '13 Juan, 33 el padre '
}
let pregunta17 = {
    "pregunta": '¿Qué es un triángulo isósceles?',
    "correcto": 'Un tipo de triángulo que tiene dos lados de igual longitud',
    "incorrecto1": 'Un tipo de triángulo que tiene los tres lados  desiguales',
    "incorrecto2": 'Un tipo de triángulo que tiene tiene todos sus lados iguales'
}
let pregunta18 = {
    "pregunta": '¿Cómo se llama a un poliedro de 20 caras?',
    "correcto": 'icosaedro',
    "incorrecto1": 'dodecaedro',
    "incorrecto2": 'apeiroedro'
}
let pregunta19 = {
    "pregunta": 'Cómo puedes comprobar si has hecho bien una división.',
    "correcto": 'Multiplicando el cociente por el divisor y sumando el resto si lo hay',
    "incorrecto1": 'Volviéndola a hacer',
    "incorrecto2": 'Sumando el cociente por el divisor y el resto'
}
let pregunta20 = {
    "pregunta": 'Cuánto es un lustro',
    "correcto": 'cinco años',
    "incorrecto1": 'cincuenta años',
    "incorrecto2": 'quinientos años'
}
let pregunta21 = {
    "pregunta": '¿Cómo se llama el componente mínimo que forma a los seres vivos?',
    "correcto": 'Célula',
    "incorrecto1": 'Tejido',
    "incorrecto2": 'Partícula'
}
let pregunta22 = {
    "pregunta": 'El proceso por el que una célula se divide para formar dos células hijas se llama:',
    "correcto": 'Mitosis',
    "incorrecto1": 'Segregación',
    "incorrecto2": 'Meiosis'
}
let pregunta23 = {
    "pregunta": 'La información genética en las células se localiza:',
    "correcto": 'En el nucleo',
    "incorrecto1": 'En la membrana',
    "incorrecto2": 'En el citoplasma'
}
let pregunta24 = {
    "pregunta": '¿Con qué respira una ballena?',
    "correcto": 'Pulmones',
    "incorrecto1": 'Por la piel',
    "incorrecto2": 'Branquias'
}
let pregunta25 = {
    "pregunta": 'Para los botánicos, el tomate es una:',
    "correcto": 'Fruta',
    "incorrecto1": 'Hortaliza',
    "incorrecto2": 'Verdura'
}
let pregunta26 = {
    "pregunta": 'La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:',
    "correcto": 'Gravedad',
    "incorrecto1": 'Normal',
    "incorrecto2": 'Rozamiento'
}
let pregunta27 = {
    "pregunta": 'La velocidad a la que viaja la luz es',
    "correcto": '300,000 km/s',
    "incorrecto1": '300,000 m/s',
    "incorrecto2": '30,000 km/h'
}
let pregunta28 = {
    "pregunta": '¿Cómo se llaman las partículas subatómicas con carga eléctrica negativa?',
    "correcto": 'Electrones',
    "incorrecto1": 'Protones',
    "incorrecto2": 'Neutrones'
}
let pregunta29 = {
    "pregunta": '¿Cuál es la principal función de los globulos rojos?',
    "correcto": 'Llevar oxígeno',
    "incorrecto1": 'Coagular la sangre',
    "incorrecto2": 'Combatir enfermedades'
}
let pregunta30 = {
    "pregunta": 'Los cromosomas están formados por:',
    "correcto": 'ADN (ácido desoxirribonucleico)',
    "incorrecto1": 'Proteínas',
    "incorrecto2": 'ARN (ácido ribonucleico)'
}

function seleccion(indice) {
    switch (indice) {
        case 1:
            return pregunta1;
            break;
        case 2:
            return pregunta2;
            break;
        case 3:
            return pregunta3;
            break;
        case 4:
            return pregunta4;
            break;
        case 5:
            return pregunta5;
            break;
        case 6:
            return pregunta6;
            break;
        case 7:
            return pregunta7;
            break;
        case 8:
            return pregunta8;
            break;
        case 9:
            return pregunta9;
            break;
        case 10:
            return pregunta10;
            break;
        case 11:
            return pregunta11;
            break;
        case 12:
            return pregunta12;
            break;
        case 13:
            return pregunta13;
            break;
        case 14:
            return pregunta14;
            break;
        case 15:
            return pregunta15;
            break;
        case 16:
            return pregunta16;
            break;
        case 17:
            return pregunta17;
            break;
        case 18:
            return pregunta18;
            break;
        case 19:
            return pregunta19;
            break;
        case 20:
            return pregunta20;
            break;
        case 21:
            return pregunta21;
            break;
        case 22:
            return pregunta22;
            break;
        case 23:
            return pregunta23;
            break;
        case 24:
            return pregunta24;
            break;
        case 26:
            return pregunta26;
            break;
        case 25:
            return pregunta25;
            break;
        case 27:
            return pregunta27;
            break;
        case 28:
            return pregunta28;
            break;
        case 29:
            return pregunta29;
            break;
        case 30:
            return pregunta30;
            break;
    }
}
document.getElementById("bot1").onclick = () => {
    selec = 1;
    controlador();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
document.getElementById("bot2").onclick = () => {
    selec = 2;
    controlador();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
document.getElementById("bot3").onclick = () => {
    selec = 3;
    controlador();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
console.log("esta es el resultado" + pregunta1)
console.log(pregunta1["pregunta"]);
console.log(pregunta1["correcto"]);
console.log(pregunta1["incorrecto1"]);
console.log(pregunta1["incorrecto2"]);

function mostrar(sel) {
    ran = Math.round(Math.random() * 2);
    ind = genera(sel);
    console.log("indice generado: " + ind);
    ax = seleccion(ind);
    for (const propiedad in ax) {
        console.log("este es la respuesta  " + propiedad + " " + ax[propiedad]);
    }
    preg = ax["pregunta"];
    cor = ax["correcto"];
    inc1 = ax["incorrecto1"];
    inc2 = ax["incorrecto2"];
    ordResp = RespuestasPosibles(cor, inc1, inc2);
    resp1 = ordResp[0];
    resp2 = ordResp[1];
    resp3 = ordResp[2];
    if (ran === 1) {
        DisplayPregunta(preg, resp1, resp2, resp3);
        a = 1;
    } else {
        DisplayPregunta2(preg, resp1, resp2, resp3);
        a = 2;
    }
    for (const propiedad in ordResp) {
        console.log("este es la respuesta  " + propiedad + " " + ordResp[propiedad]);
    }

    console.log(typeof(ax));

}
document.getElementById("botones").innerHTML = '<input type="button" class="control" id="btn1" value="Aceptar"></input><input type="button" class="control" id="btn2" value="Reiniciar"></input>';
document.getElementById("btn1").hidden = true;
document.getElementById("btn2").hidden = true;

function DisplayPregunta(a, b, c, d) {
    let dis;
    pre = "<h2 id='preg'>" + a + "</h2>";
    display1 = "<input type='radio' id='uno' name='uno' value='1' checked>";
    dis1 = '<p><label for="uno"id="1">' + display1 + b + "</label></p>";


    display2 = "<input type='radio' id='dos' name='uno'  value='2' >";
    dis2 = '<p><label for="dos"id="2">' + display2 + c + "</label></p>";


    display3 = "<input type='radio' id='tres' name='uno'  value='3' >";
    dis3 = '<p><label for="tres"id="3">' + display3 + d + "</label></p>";
    dis = dis1 + dis2 + dis3;
    document.getElementById("contenedor").innerHTML = pre + dis;

}

function DisplayPregunta2(a, b, c, d) {
    lis = '<h2 id="preg">' + a + '</h2>';
    selector = '<select name="nombre" id="jajaja"><option value="0" disabled selected>**SELECCIONE</option><option value="1">' + b + '</option><option value="2">' + c + '</option><option value="3">' + d + '</option></select>';
    document.getElementById("contenedor").innerHTML = lis + selector;
}



function genera(but) {
    let num;
    let repe;
    if (but === 1) {
        minimo = 1;
        maximo = 10;
    } else if (but === 2) {
        minimo = 11;
        maximo = 20;
    } else {
        minimo = 21;
        maximo = 30;
    }
    while (repe != false) {
        num = Math.round(Math.random() * (maximo - minimo) + minimo);
        repe = repetida(num);
    }
    control.push(num);
    console.log(control);
    return num;

}

function repetida(x) {
    repe = false;
    for (i = 0; i < control.length; i++) {
        if (x == control[i]) {
            repe = true;
        }
    }
    return repe;
}

function RespuestasPosibles(a, b, c) {
    let respuesta = [a, b, c];
    var n = respuesta.length - 1;
    while (n + 1 > 1) {
        var indice = Math.round(Math.random() * (n--));
        var temp = respuesta[n];
        respuesta[n] = respuesta[indice];
        respuesta[indice] = temp;

    }
    return respuesta;
}

function respCorrecta(correcto, respondio) {
    if (respondio === correcto)
        return true
    else
        return false
}

document.getElementById("btn1").onclick = () => {
    let respVer;
    contar += 1;
    if (a === 1) {
        let cod;
        var radioButTrat = document.getElementsByName("uno");

        for (var i = 0; i < radioButTrat.length; i++) {

            if (radioButTrat[i].checked == true) {
                cod = radioButTrat[i].value;
                respVer = document.getElementById(cod).textContent;
                console.log(document.getElementById(cod).textContent);
            }
        }
    } else if (a === 2) {
        var cod = document.getElementById("jajaja").value;
        var combo = document.getElementById("jajaja");
        var selected = combo.options[combo.selectedIndex].text;
        respVer = selected;
    }
    document.getElementById("salir").innerText = "SIGUIENTE" //llamo funcion es correcta
    if (respCorrecta(cor, respVer)) {
        cont++;

        document.getElementById("aciertos").innerText = "Aciertos :" + cont;
        document.getElementById("final").innerText = "¡¡¡RESPUESTA CORRECTA!!!"
        document.location = "#resultado";
    } else {
        fallas += 1;
        document.location = "#resultado";
        document.getElementById("fallas").innerText = "Errores :" + fallas;
        document.getElementById("final").innerText = "RESPUESTA INCORRECTA";

    }
    if (contar == 10) {

        document.getElementById("final").innerText = " TUS RESPUESTAS CORRECTAS: " + cont + "  RESPUESTAS INCORRECTAS :" + fallas
        document.location = "#resultado";
        document.getElementById('btn1').disabled = true;
        document.getElementById("btn2").onclick = () => {
            location.reload();
        }

    } else
        mostrar(selec);
}
document.getElementById("btn2").onclick = () => {
    location.reload();
}

function controlador() {
    mostrar(selec);
}
main();

function main() {
    document.location = "#resultado";
    document.getElementById("final").innerText = "BIENVENIDO"

}