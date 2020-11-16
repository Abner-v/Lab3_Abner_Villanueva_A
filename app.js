control = [];
let fallas = 0;
let cont = 0;
let contar = 0;
let seleccion;

document.getElementById("bot1").onclick = () => {
    seleccion = 1;
    principal();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
document.getElementById("bot2").onclick = () => {
    seleccion = 2;
    principal();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
document.getElementById("bot3").onclick = () => {
    seleccion = 3;
    principal();
    document.getElementById("btn1").hidden = false;
    document.getElementById("btn2").hidden = false;
    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;
}
class Cpregunta {
    constructor(pregunta, correcto, incorrecto1, incorrecto2) {
        this.pregunta = pregunta;
        this.correcto = correcto;
        this.incorrecto1 = incorrecto1;
        this.incorrecto2 = incorrecto2;
    }
    getTexto() {
        return this.pregunta;
    }
    getRespuestasPosibles() {
        let respuesta = [this.correcto, this.incorrecto1, this.incorrecto2];
        var n = respuesta.length - 1;
        while (n + 1 > 1) {
            var indice = Math.round(Math.random() * (n--));
            var temp = respuesta[n];
            respuesta[n] = respuesta[indice];
            respuesta[indice] = temp;
            /* console.log(indice);*/
        }
        return respuesta;
    }
    respCorrecta(respondio) {
        if (respondio === this.correcto)
            return true
        else
            return false
    }
}

class almacen {
    constructor() {

    }
    getPreguntas() {
        let reto = [];
        reto[0] = new Cpregunta('¿Quién es el autor de el Don Quijote de la Mancha?', 'Miguel de Cervantes', 'Raphael Vellageto', 'Jorge Luis Borges');
        reto[1] = new Cpregunta('¿Quién fue el primer hombre en pisar la luna?', 'Neil Armstrong', 'Usain Bolt', 'Lance Armstrong');
        reto[2] = new Cpregunta('¿Quién fue la primera mujer en ir al espacio?', 'Valentina Tereshkova', 'Jessica Meir', 'Christina Koch');
        reto[3] = new Cpregunta('¿En qué país se encuentra el Wembley Arena?', 'Londres, en el Reino Unido', 'Estados Unidos', 'Francia');
        reto[4] = new Cpregunta('Según la Biblia, ¿quién traicionó a Jesús?', 'Judas', 'Juan', 'Pedro');
        reto[5] = new Cpregunta('¿Cuál es el libro sagrado del Islam?', 'Corán', 'El Libro Negro', 'Atalaya');
        reto[6] = new Cpregunta('¿Cuál es la capital de Turquía?', 'Ankara', 'Otawa', 'Dakar');
        reto[7] = new Cpregunta('¿En qué país se utilizó la primera bomba atómica en un contexto de combate?', 'Japon-Hiroshima', 'Vietnam-Hanoi', 'Japon-Nagasaki');
        reto[8] = new Cpregunta('¿Quién es el autor de Hamlet?', 'William Shakespeare', 'Charles Dickens', 'Oscar Wilde');
        reto[9] = new Cpregunta('¿Cómo se llama el estadio del F.C. Barcelona?', 'Camp Nou', 'Maracana', 'El Monumental');
        return reto;

    }
    getPreguntas1() {
        let reto = [];
        reto[0] = new Cpregunta('¿A cuánto equivale π?', '3,141592', '3,149215', '3,144123');
        reto[1] = new Cpregunta('7/5 + 2/3 - 1 =', '16/15', '1', '17/15');
        reto[2] = new Cpregunta('¿Qué formula es esta? S = π x R²', 'Superficie de un círculo', 'Diámetro de un círculo', 'Volumen de un cilindro');
        reto[3] = new Cpregunta('¿Qué expresa esta formula? e = mc²', 'Equivalencia entre masa y energía', 'La teoría de la probabilidad', 'Volumen de un cubo');
        reto[4] = new Cpregunta('¿Cuáles de los siguientes triángulos, según sus medidas son rectángulos?', '3 cm, 4 cm, 5 cm', '3 cm, 4 cm, 7 cm ', '7 cm, 4 cm, 6 cm');
        reto[5] = new Cpregunta('Juan tiene 20 años menos que su padre y este tiene el triple de los años de su hijo. ¿Qué edad tienen cada uno?', '10 juan, 30 el padre', '11 Juan, 31 el padre', '13 Juan, 33 el padre ');
        reto[6] = new Cpregunta('¿Qué es un triángulo isósceles?', 'Un tipo de triángulo que tiene dos lados de igual longitud', 'Un tipo de triángulo que tiene los tres lados  desiguales', 'Un tipo de triángulo que tiene tiene todos sus lados iguales');
        reto[7] = new Cpregunta('¿Cómo se llama a un poliedro de 20 caras?', 'icosaedro', 'dodecaedro', 'apeiroedro');
        reto[8] = new Cpregunta('Cómo puedes comprobar si has hecho bien una división.', 'Multiplicando el cociente por el divisor y sumando el resto si lo hay', 'Volviéndola a hacer', 'Sumando el cociente por el divisor y el resto');
        reto[9] = new Cpregunta('Cuánto es un lustro', 'cinco años', 'cincuenta años', 'quinientos años');
        return reto;
    }
    getPreguntas2() {
        let reto = [];
        reto[0] = new Cpregunta('¿Cómo se llama el componente mínimo que forma a los seres vivos?', 'Célula', 'Tejido', 'Partícula');
        reto[1] = new Cpregunta('El proceso por el que una célula se divide para formar dos células hijas se llama:', 'Mitosis', 'Segregación', 'Meiosis');
        reto[2] = new Cpregunta('La información genética en las células se localiza:', 'En el nucleo', 'En la membrana', 'En el citoplasma');
        reto[3] = new Cpregunta('¿Con qué respira una ballena?', 'Pulmones', 'Por la piel', 'Branquias');
        reto[4] = new Cpregunta('Para los botánicos, el tomate es una:', 'Fruta', 'Hortaliza', 'Verdura');
        reto[5] = new Cpregunta('La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:', 'Gravedad', 'Normal', 'Rozamiento');
        reto[6] = new Cpregunta('La velocidad a la que viaja la luz es', '300,000 km/s', '300,000 m/s', '30,000 km/h');
        reto[7] = new Cpregunta('¿Cómo se llaman las partículas subatómicas con carga eléctrica negativa?', 'Electrones', 'Protones', 'Neutrones');
        reto[8] = new Cpregunta('¿Cuál es la principal función de los globulos rojos?', 'Llevar oxígeno', 'Coagular la sangre', 'Combatir enfermedades');
        reto[9] = new Cpregunta('Los cromosomas están formados por:', 'ADN (ácido desoxirribonucleico)', 'Proteínas', 'ARN (ácido ribonucleico)');
        return reto;

    }
    mostra() {
        let lista = this.getPreguntas1();
        lista.forEach(element => {
            console.log(element.getTexto());

        });
    }

}
const li = new almacen();
li.mostra();

class CCuestionario {
    constructor() {
        this.preguntas = [];
        this.preguntaActual = new Cpregunta;
        this.listas = new almacen();
    }

    Ccuestionario() {
        if (seleccion == 1) {
            this.preguntas = this.listas.getPreguntas();
        } else if (seleccion == 2) {
            this.preguntas = this.listas.getPreguntas1();
        } else
            this.preguntas = this.listas.getPreguntas2();
        this.GenerarPregunta();
        // console.log(this.preguntas);

    }
    GenerarPregunta() { //nuevaPregunta
        var indice = genera(this.preguntas.length);
        //   var cual = Math.round(Math.random() * ((this.preguntas.length) - 1));

        console.log(indice);
        this.preguntaActual = this.preguntas[indice];
        console.log(this.preguntas[indice])
    }
    getPregunta() {
        return this.preguntaActual;
    }
}

function genera(tamaño) {
    let num;
    let repe;
    while (repe != false) {
        num = Math.round(Math.random() * ((tamaño) - 1));
        repe = repetida(num);
    }

    control.push(num);
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


function principal() {
    ran = Math.round(Math.random() * 2);
    this.cuestionario = new CCuestionario();
    this.cuestionario.Ccuestionario();
    this.pregunta = Cpregunta;
    this.pregunta = this.cuestionario.getPregunta();
    this.preg = this.pregunta.pregunta;
    lista = this.pregunta.getRespuestasPosibles();
    this.resp1 = lista[0];
    this.resp2 = lista[1];
    this.resp3 = lista[2];

    if (ran === 1) {
        DisplayPregunta(this.preg, this.resp1, this.resp2, this.resp3);
        a = 1;
    } else {
        DisplayPregunta2(this.preg, this.resp1, this.resp2, this.resp3);
        a = 2;
    }
}

document.getElementById("botones").innerHTML = '<input type="button" class="control" id="btn1" value="Aceptar"></input><input type="button" class="control" id="btn2" value="Reiniciar"></input>';
document.getElementById("btn1").hidden = true;

document.getElementById("btn2").hidden = true;
let a = 1;

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
                // window.alert("error");

            }
        }
    } else if (a === 2) {
        var cod = document.getElementById("jajaja").value;
        var combo = document.getElementById("jajaja");
        var selected = combo.options[combo.selectedIndex].text;
        respVer = selected;
    }
    document.getElementById("salir").innerText = "SIGUIENTE"
    if (cuestionario.getPregunta().respCorrecta(respVer)) {
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
        principal();
}
document.getElementById("btn2").onclick = () => {
    location.reload();
}
main();

function main() {
    document.location = "#resultado";
    document.getElementById("final").innerText = "BIENVENIDO"

}