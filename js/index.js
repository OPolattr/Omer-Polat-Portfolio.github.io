function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s;

  document.getElementById("clockShow").textContent = time;

  setTimeout(showTime, 1000);
}

function contactControl() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Fill in all fields.")
    return false;
  }
  if (!regex.test(email))
  {
    alert("Please fill in the email according to the format.")
    return false;
  }
  
  return true;
}


showTime();
