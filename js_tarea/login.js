let input_fields = document.querySelectorAll('input');
    
for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];
  field.addEventListener('input', function (e) {
    if (e.target.value != "") {
      e.target.parentNode.classList.add('has-content');
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove('has-content');
    }
  });
}

function login(form) {
    if (form.u.value=="Mali" && form.p.value=="helloworld"){
        location="consultar_saldo.html"
    } else if (form.u.value=="Gera" && form.p.value=="l33t"){
        location="consultar_saldo.html"
    } else if (form.u.value=="Maui" && form.p.value=="123") {
        location="consultar_saldo.html"
    } else {
        alert('Usuario o contraseña incorrectos')
    }
    }

