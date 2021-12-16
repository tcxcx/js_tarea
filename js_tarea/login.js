var cuentas = [
        { nombre: "Mali", saldo: 200, password: 'helloworld' },
        { nombre: "Gera", saldo: 290, password: 'l33t' },
        { nombre: "Maui", saldo: 67, password: '123' },
        { nombre: "Tomas", saldo: 300, password: 'holamundo' },
        { nombre: "Carlos", saldo: 367, password: '902' },
        { nombre: "Marisol", saldo: 390, password: '1234' },]
       
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
        let j;
        if (form.u.value=="Mali" && form.p.value=="helloworld"){
            j = 0;
          document.getElementById("inicial").style.display="none";
          document.getElementById("consulta").style.display="block";
        } else if (form.u.value=="Gera" && form.p.value=="l33t"){
           j = 1;  
           document.getElementById("inicial").style.display="none";
           document.getElementById("consulta").style.display="block";
            
        } else if (form.u.value=="Maui" && form.p.value=="123") {
           j = 2;  
          document.getElementById("inicial").style.display="none";
          document.getElementById("consulta").style.display="block";
          
        } else {
            alert('Usuario o contraseña incorrectos')
        }
        document.getElementById("numeroCta").innerText= j;
        document.getElementById("Usuario1").innerText = cuentas[j].nombre;
        document.getElementById("balance").innerText = cuentas[j].saldo;
        }

        function ingresar(){ 
         const currentuser = document.getElementById("numeroCta")
     //     console.log(currentuser.innerHTML);
          let j= currentuser.innerHTML;
           let canti = parseInt(prompt("Ingresa cantidad a transferir"));
               if (cuentas[j].saldo+canti<900){
                  console.log(cuentas[j].saldo)    
                  cuentas[j].saldo=cuentas[j].saldo+canti;
                    console.log(cuentas[j].saldo)
                    document.getElementById("balance").innerText = cuentas[j].saldo;
                      }
                      else{
                          alert( "La cantidad ingresada supera el saldo de $900");
                             }
          

        }
          
        function retirar(){
              let canti = parseInt(prompt("Ingresa cantidad a retirar"));
              const currentuser = document.getElementById("numeroCta")
              console.log(currentuser.innerHTML);
              let j= currentuser.innerHTML;
              
          
              if (cuentas[j].saldo-canti>10){
              console.log(cuentas[j].saldo)    
              cuentas[j].saldo=cuentas[j].saldo-canti;
                console.log(cuentas[j].saldo)
                document.getElementById("balance").innerText = cuentas[j].saldo;
                  }
                  else{
                      alert( "La cantidad que resta es inferior a $10 no se puede retirar");
                         }
        }
        function consulta(){
          const currentuser = document.getElementById("numeroCta")
          let j= currentuser.innerHTML;
          console.log(j);
          console.log(cuentas[j].saldo);
          alert(`Tu saldo actual es de $ ${cuentas[j].saldo}`);           
        }
