
function guardarNombre() {
  const username = document.getElementById("username").value.trim();
  if(username){
    console.info(username); 
    localStorage.setItem('username',username);
    window.location.href="index.html";
  }else{
    alert('Debes ingresar tu nombre')
  }
}

function borrarNombre(){
  localStorage.clear();
  alert('el nombre del usuario se borro con exito');
  document.getElementById("username").value ="";
}