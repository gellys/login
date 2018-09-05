// VALIDACOES DO FORMULARIO

function validation(){

  // Username e password validos
   var userName = "Brasil";
   var userPass = "2018";
   
   // Pega username de entrada ;
   var user = document.getElementById("name").value;
   var pass = document.getElementById("pass").value;
   
   // Condições do formulario
   if(user==userName && pass==userPass){
    alert("Login efetuado com sucesso!");
     return true;
   }else if(user=="" && pass==""){
     alert("Digite usuário e senha pra continuar");
     return false;
   }
   else{
     alert("A senha e usuário está incorreto");
     return false;
   }
 }

 "use strict";  
 var switchText = document.getElementById("help");  
 var elToggled = document.getElementById("01");
 
 elToggled.style.display = "block";  
 switchText.addEventListener("click", function(){  
     if(elToggled.style.display == "block") {  
         elToggled.style.display = "none";  
     } else {  
         elToggled.style.display = "block";  
     }  
 }, false);  