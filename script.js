// Toggle_Setting_Profile
var settingMenu = document.querySelector(".setting-menu");
function settingMenuToggle() {
  settingMenu.classList.toggle("setting-menu-height");
}

// Toggle_Dark_Mode_Btn
var darkBtn = document.querySelector("#dark-btn");
darkBtn.addEventListener("click", function () {
  darkBtn.classList.toggle("dark-btn-on");
  // Toggle_Dark_Mode_Theme
  document.body.classList.toggle("dark-theme");
  // Update localstorage when toggle btn
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// TODO: create localStorage to store theme
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  //?? Create localStorage for web browser (use .setItem)
  // the localstorage name "theme" and value is "light"
  localStorage.setItem("theme", "light");
}

//?? Read value of localStorage (use .getItem)
// localStorage.getItem("theme");
