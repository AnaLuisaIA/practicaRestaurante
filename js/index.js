$(document).ready(function() {
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav({
    menuWidth: 280, // Default is 240
    edge: 'left', // Choose the horizontal origin
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('.slider').slider({
    indicators: false,
    height: 300
  });
  $('.modal').modal();
  $('select').material_select();
  $('#textarea1').trigger('autoresize');
});

const timeStamp = () => {
  let options = {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  let now = new Date().toLocaleString('es-MX', options);
  return now;
};

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCnK0SpcgtpqX1Ot6zZjRztAvOvPm0MAyo",
  authDomain: "restaurante-dcf45.firebaseapp.com",
  databaseURL: "https://restaurante-dcf45.firebaseio.com",
  projectId: "restaurante-dcf45",
  storageBucket: "restaurante-dcf45.appspot.com",
  messagingSenderId: "312243437501"
};

firebase.initializeApp(config);
// Get a reference to the database service
var rootRef = firebase.database().ref();

var comentariosRef = firebase.database().ref('comentarios');

comentariosRef.on('child_added', function(snapshot) {
  var nComentario = snapshot.val();
  addCommentElement(nComentario.usuario, nComentario.opcionMenu, nComentario.comentario, nComentario.horaComentario);
});

const addCommentElement = (nombre,opcionMenu,comentario,timeStamp) =>{
  let comentarioSeccion = document.getElementById('comentarios');
  comentarioSeccion.innerHTML = `<hr>
  <h5><strong>${nombre}</strong> <span id="horaComent">${timeStamp}</span>
  <br> <span id="acercaComent">Acerca de <strong>${opcionMenu}</strong></span>
  </h5><br>
  <p id="cuadroComent">${comentario}</p>${comentarioSeccion.innerHTML}`;
}

function ponerComentario() {
  let nombre = document.getElementById('nombre_user').value;
  let comentario = document.getElementById('textarea1').value;
  let opcionMenu = document.getElementById('seleccion').value;

  if(!opcionMenu){
    alert("Escoge la opción del menú");
  }
  else if (nombre && comentario && opcionMenu) {
    rootRef.child('comentarios').push({
      usuario: nombre,
      comentario: comentario,
      opcionMenu: opcionMenu,
      horaComentario: timeStamp()
    });
  }

  document.getElementById('nombre_user').value = '';
  document.getElementById('textarea1').value = '';
}
