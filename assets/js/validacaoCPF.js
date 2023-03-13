let value_cpf = document.querySelector('#campo_cpf');


 value_cpf.addEventListener("keydown", function(e) {
    document.querySelector('.cpf-validacao span').innerHTML = ''
    if (e.key > "a" && e.key < "z") {
     e.preventDefault();
   }
 });
value_cpf.addEventListener("change", function(e) {

     //Remove tudo o que não é dígito
     let validar_cpf = this.value.replace( /\D/g , "");

     //verificação da quantidade números
     if (validar_cpf.length==11){

     // verificação de CPF valido
      var Soma;
      var Resto;

      Soma = 0;
      for (let i=1; i<=9; i++){ 
        Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      }
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(9, 10))){
        document.querySelector('.cpf-validacao span').append('CPF inválido')

        document.querySelector('.button_sub').classList.add('disabled');
        // alert('teste')
      }

      Soma = 0;
      for (let i = 1; i <= 10; i++){ 
        Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
      }  

      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(validar_cpf.substring(10, 11))){
        document.querySelector('.cpf-validacao span').append('CPF inválido')

        document.querySelector('.button_sub').classList.add('disabled');
        // alert('teste')
      }

     } else {
      document.querySelector('.cpf-validacao span').append('CPF Inválido! É esperado 11 dígitos numéricos')
      document.querySelector('.button_sub').classList.add('disabled');
      // alert('teste')
     }   

 })