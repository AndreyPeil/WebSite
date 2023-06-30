let username;
document.getElementById("myButton").onclick = function() {
  username = document.getElementById("myText").value;
  document.getElementById("myOtherText").innerHTML = "Seu nome é: " + username;
};

var inputElement = document.getElementById("myText");

inputElement.addEventListener("input", function() {
  var inputValue = inputElement.value;
  var sanitizedValue = sanitizeInput(inputValue);
  inputElement.value = sanitizedValue;
});

function sanitizeInput(input) {
  var sanitizedValue = input.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
  return sanitizedValue;
}
