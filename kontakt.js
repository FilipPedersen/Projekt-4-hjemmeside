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

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Skriv venligst en gyldig email";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(nummer) || nummer.length !=8){
    text = "Skriv venligst et gyldigt nummer";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 1){
    text = "Skriv venligst din besked";
    error_message.innerHTML = text;
    return false;
  }
  alert("Din besked blev sendt!")
  return true;
}
