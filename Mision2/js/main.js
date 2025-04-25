window.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem('username');
    if (!name) {
      window.location.href = "login.html";
    } else {
      document.getElementById('saludo').textContent = `Hola, ${name}!`;
    }
});



  