const error = document.getElementById('error')
const error2 = document.getElementById('error2')
const validateEmail =()=>{

const email = document.getElementById('input-field')
const writeEmail = email.value;
email.value = '';
const cheakEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cheak = (cheakEmail.test(writeEmail));

if(cheak === true){
  error.textContent = '';
  error.innerHTML = `<P style = "background:#479F76";  class= " p-3 ">Login Successfully </p>`
}
else{
 error.textContent = '';
  error.innerHTML = `<P style = "background:#EA868F";  class= " p-3 "> Please enter a valid email </p>`
 
}




// password 

const email2 = document.getElementById('input-field2')
const writeEmail2 = email2.value;
email2.value = '';
const cheakPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;

const cheak2 = (cheakPassword.test(writeEmail2));

if(cheak2 === true){
  error2.textContent = '';
  error2.innerHTML = `<P style = "background:#479F76";  class= " p-3 ">Login Successfully </p>`
}
else{
  error2.textContent = '';
  error2.innerHTML = `<P style = "background:#EA868F";  class= " p-3 "> Please enter a valid password </p>`
 
}
}

// password 







