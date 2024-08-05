
  
var countDownDate = new Date("aug 4, 2024 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
function showAlert(){
    alert("Button Clicked")
}
function homepage(){
  window.location.href = "index.html";
}
function loginpage(){
  window.location.href = "loginpage.html";
}
function cpage(){
  window.location.href = "contactus.html";
}
function validateEmail(emailInput) {
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(emailValue);

  if (!isValidEmail) {
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
}
function limitPhoneLength(phoneInput) {
  const phoneValue = phoneInput.value;
  if (phoneValue.length > 10) {
    phoneInput.value = phoneValue.slice(0, 10);
  }
}
