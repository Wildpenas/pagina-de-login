let btn = document.getElementById('btn')
btn.addEventListener('click',logar)
let email = document.getElementById('email')
let pass = document.getElementById('pass')

let pemail = document.getElementById('pemail')




  function logar(e){
    e.preventDefault();
    
    if( email.value=="" 
    || email.value.indexOf('@')==-1 
      || email.value.indexOf('.')==-1 )
     {
        document.getElementById('pemail').classList.add('active');
        document.querySelector('.demail').classList.add('active1');
        document.querySelector('.material-icons-outlined').classList.add('active1');
        
        
     } else{
        document.querySelector('.demail').classList.remove('active1');
        document.querySelector('.material-icons-outlined').classList.remove('active1');
        document.getElementById('email').value='';
        document.getElementById('pass').value='';
     }

}