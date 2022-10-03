const themeSwitcher = document.getElementById("theme");

if (localStorage.getItem("theme") === "theme-dark") {
  setTheme("theme-dark");
} else {
  setTheme("theme-light");
}

theme.addEventListener("click", toggleTheme);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  // document.documentElement.className = themeName;
  document.body.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
