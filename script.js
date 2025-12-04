
function showOutput() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const option = document.getElementById('dropdown').value;

 
  const message = 'Email: ' + email + '\nPassword: ' + password + '\nOption: ' + option;


  document.getElementById('output').innerText = message;
}