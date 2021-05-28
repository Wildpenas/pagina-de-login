let btn = document.getElementById('btn')
btn.addEventListener('click',logar)
let email = document.getElementById('email')
let pass = document.getElementById('pass')

let pemail = document.getElementById('pemail')






/*function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert('Por favor, informe o seu EMAIL.');
      document.frmEnvia.email.focus();
      document.getElementById('email').classList.add('active')
      return false;
    }
    return true;
  }*/

  function logar(e){
    e.preventDefault();
    
    if( email.value=="" 
    || email.value.indexOf('@')==-1 
      || email.value.indexOf('.')==-1 )
     {
        document.getElementById('pemail').classList.add('active');
        document.getElementById('email').classList.add('active1');
        //alert( "Por favor, informe um E-MAIL válido!" );
       // return false;
     } else{
        document.getElementById('email').classList.remove('active1');
        document.getElementById('email').value='';
        document.getElementById('pass').value='';
     }

}