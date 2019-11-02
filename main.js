const time = document.getElementById("time"),
  greetings = document.getElementsByClassName("greetings")[0],
  name = document.getElementsByClassName("name")[0],
  focus = document.getElementsByClassName("focus")[0];

//Set Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const ampm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}${ampm}`;
  setTimeout(showTime, 1000);
}
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
showTime();

//Set Background and greetings

function setBg() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage =
      "url('ttps://i.ibb.co/7vDLJFb/morning.jpg')";
    greetings.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";

    greetings.textContent = "Good Afternoon";
  } else {
    greetings.textContent = "Good Night";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    document.body.style.color = "white";
  }
}
setBg();
function setName(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
function setFocus(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
function getName() {
  if (localStorage.getItem("name") == null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
function getFocus() {
  if (localStorage.getItem("focus") == null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
getName();
getFocus();
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
