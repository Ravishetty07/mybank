// To login 
function validateLogin() {
    var username = document.getElementById('Uname').value;
    var password = document.getElementById('Pass').value;
    
    if(username === "admin" && password === "1234") {
      window.location.href = "account/index.html";  // Redirect to success page
        } else {
            alert("Invalid username or password.");
            }
}

