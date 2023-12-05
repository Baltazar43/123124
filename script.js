
function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');
  
    if (username === 'worker-one' && password === '1234') {
      // Redirect to str1.html
      window.location.href = 'main.html';
    } else {
      // Display error message
      errorMessage.innerText = 'Invalid username or password';
      errorMessage.style.display = 'block';
  
      // Hide the error message after 3 seconds
      setTimeout(function () {
        errorMessage.style.display = 'none';
      }, 3000);
    }
  }
