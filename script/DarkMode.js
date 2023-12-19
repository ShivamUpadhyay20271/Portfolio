document.addEventListener("DOMContentLoaded", function() {
  var mode = document.getElementById("mode");

  mode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      enabledarkMode();
    } else {
      disabledarkMode();
    }
  });

  // Check the initial state of light mode
  var isdarkMode = localStorage.getItem("darkMode");

  if (isdarkMode === "1") {
    enabledarkMode();
  } else {
    disabledarkMode();
  }
});

function enabledarkMode() {
  var mode = document.getElementById("mode");
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "1");
  mode.classList.remove('fa-sun');
  mode.classList.add('fa-moon');
  mode.style.animation = "slidemenu 500ms ease forwards";
  setTimeout(() => {
    mode.style.animation ="";
  }, 500);
}

function disabledarkMode() {
  var mode = document.getElementById("mode");
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "0");
  mode.classList.remove('fa-moon');
  mode.classList.add('fa-sun');
  mode.style.animation = "slidemenu 500ms ease forwards";
  setTimeout(() => {
    mode.style.animation ="";
  }, 500);
}