function hacerOrden() {
  var fila, celda, celda2, textoCelda, textoCelda2;
  var cuentaTotal = 0;

  //Activamos las vistas para la tabla y su contenedor
  var divisor = document.getElementById("divTabla");
  divisor.style.display = "block";
  var tabla = document.getElementById("menuTabla");
  tabla.style.display = "table";
  //Se almacena en variable el cuerpo de la tabla
  var tablaBody = document.getElementById("tbody");

  //Se obtiene el valor true/false del checkbox y se almacena
  var entrada1 = document.getElementById("ckdoblada").checked;
  //Si el valor es true (está seleccionado) agrega una fila en
  //la tabla
  if (entrada1 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Tacos para compartir");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$120.00");

    cuentaTotal += 120;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var entrada2 = document.getElementById("ckqueso").checked;
  if (entrada2 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Queso fundido");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$150.00");

    cuentaTotal += 150;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var entrada3 = document.getElementById("ckguacamole").checked;
  if (entrada3 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Guacamole");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$200.00");

    cuentaTotal += 200;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }
  var entrada4 = document.getElementById("cktacos1").checked;
  if (entrada4 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Tacos dorados");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$150.00");

    cuentaTotal += 150;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }
  var entrada5 = document.getElementById("ckensalada").checked;
  if (entrada5 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Ensalada");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$100.00");

    cuentaTotal += 100;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }
  var entrada6 = document.getElementById("ckverdura").checked;
  if (entrada6 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Verduras a la plancha");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$80.00");

    cuentaTotal += 80;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }
  document.getElementById("total").innerHTML = cuentaTotal;

  //Comidas selección
  var comida1 = document.getElementById("cktacos2").checked;
  if (comida1 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Tacos de carnitas");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$100.00");

    cuentaTotal += 100;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var comida2 = document.getElementById("ckarrachera").checked;
  if (comida2 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Arrachera");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$180.00");

    cuentaTotal += 180;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }
  var comida3 = document.getElementById("ckpozole").checked;
  if (comida3 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Pozole rojo");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$120.00");

    cuentaTotal += 120;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var comida4 = document.getElementById("ckchile").checked;
  if (comida4 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Chiles en nogada");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$180.00");

    cuentaTotal += 180;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var comida5 = document.getElementById("ckfilete").checked;
  if (comida5 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Filete primavera");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$110.00");

    cuentaTotal += 110;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var comida6 = document.getElementById("ckpechuga").checked;
  if (comida6 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Pechuga albañil");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$90.00");

    cuentaTotal += 90;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var postre1 = document.getElementById("ckchoco").checked;
  if (postre1 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Chocoflan Kubo");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$50.00");

    cuentaTotal += 50;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var postre2 = document.getElementById("ckarroz").checked;
  if (postre2 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Arroz con leche");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$40.00");

    cuentaTotal += 40;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var postre3 = document.getElementById("ckzanahoria").checked;
  if (postre3 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Pastel de zanahoria");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$45.00");

    cuentaTotal += 45;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var postre4 = document.getElementById("ckfruta").checked;
  if (postre4 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Copa de fruta");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$60.00");

    cuentaTotal += 60;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var bebida1 = document.getElementById("ckjugo").checked;
  if (bebida1 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Jugos naturales");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$30.00");

    cuentaTotal += 30;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var bebida2 = document.getElementById("cksoda").checked;
  if (bebida2 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Soda italiana");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$45.00");

    cuentaTotal += 45;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  var bebida3 = document.getElementById("ckmojito").checked;
  if (bebida3 == true) {
    fila = document.createElement("tr");

    celda = document.createElement("td");
    textoCelda = document.createTextNode("Mojito Kubo");

    celda2 = document.createElement("td");
    textoCelda2 = document.createTextNode("$40.00");

    cuentaTotal += 40;

    celda.appendChild(textoCelda);
    celda2.appendChild(textoCelda2);
    fila.appendChild(celda);
    fila.appendChild(celda2);
    tablaBody.appendChild(fila);
  }

  document.getElementById('total').innerHTML="$"+cuentaTotal+".00";
}
