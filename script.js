function login(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');
  
    if (email === 'hello' && password === 'hello') {
      window.location.href = 'myinfo.html';
    } else {
      loginMessage.textContent = 'Wrong username or password. Please try again.';
    }
  }
  