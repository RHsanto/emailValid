const error = document.getElementById('error')
const validateEmail =()=>{

const email = document.getElementById('input-field')
const writeEmail = email.value;
email.value = '';
const cheakEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cheak = (cheakEmail.test(writeEmail));

if(cheak === true){
  error.innerHTML = `<P style = "background:#479F76";  class= " p-3 ">Login Successfully </p>`
}
else{

  error.innerHTML = `<P style = "background:#EA868F";  class= " p-3 "> Please enter a valid email </p>`
 
}
}

