var buttonEl = document.querySelector("button");
var formEl = document.querySelector("form");
var buttonElTwo = document.getElementById("button-two");
var formElTwo = document.getElementById("form-two");
var emailSubmit = document.getElementById("email-submit")


buttonEl.addEventListener("click", function () {
  formEl.removeAttribute("class");
  
  buttonEl.style.display ="none";
  
});

buttonElTwo.addEventListener("click", function () {
  formElTwo.removeAttribute("class");
  buttonElTwo.style.display ="none";
});

/*emailSubmit.addEventListener("click", function (){
  console.log(emailSubmit);
});*/
