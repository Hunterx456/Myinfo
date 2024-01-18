function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginMessage = document.getElementById('loginMessage');
  const loginButton = document.querySelector('button');

  if (email === 'hello' && password === 'hello') {
    window.location.href = 'myinfo.html';
  } else {
    loginMessage.textContent = 'Wrong username or password. Please try again.';

    // Move the button to a random position
    const randomX = Math.floor(Math.random() * 400);
    const randomY = Math.floor(Math.random() * 400);

    loginButton.style.position = 'absolute';
    loginButton.style.left = `${randomX}px`;
    loginButton.style.top = `${randomY}px`;
  }
}
function navigateToNewUserPage() {
  window.location.href = 'newuserlogin.html';
}
function navigateToforgotpage() {
  window.location.href ='forgot.html'
}
document.getElementById('newuser').addEventListener('click', navigateToNewUserPage);
document.getElementById('forgot').addEventListener('click', navigateToforgotpage);
