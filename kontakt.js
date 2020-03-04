function validation(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var nummer = document.getElementById("nummer").value;
  var besked = document.getElementById("besked").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if(name.length <3){
    text = "Skriv venligst dit navn";
    error_message.innerHTML = text;
    return false;
  }

  return false;
}
