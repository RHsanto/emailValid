// function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

const validateEmail =()=>{

const email = document.getElementById('input-field')
const writeEmail = email.value;

const cheakEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cheak = (cheakEmail.test(writeEmail));

if(cheak === true){
  email.style.background = 'rgba(34, 226, 44, 0.993)';
  email.style.color = 'black';
}
else{
  email.style.background = 'rgba(221, 60, 60, 0.986)';
  email.style.color = 'white';
}
}

