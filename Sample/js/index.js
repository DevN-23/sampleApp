const name = document.getElementById("name");
const submit_button = document.getElementById("submit");
const display = document.getElementById("show-name");

submit_button.addEventListener("click", function(){
  display.innerHTML = "Hey "+name.value;
  console.log(name);
})
