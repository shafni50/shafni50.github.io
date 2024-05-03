// dark-mode
document.addEventListener("DOMContentLoaded", function () {
  let isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

  const darkModeToggle = document.getElementById("darkModeToggle");

  if (isDarkModeEnabled === "true") {
      document.body.classList.add("dark-mode");
      darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
      let isDarkModeEnabled = darkModeToggle.checked;
      document.body.classList.toggle("dark-mode", isDarkModeEnabled);
      localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
  });
});

// Open links in new tab
const container = document.querySelector('.blog-container');
const links = container.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  links[i].target = "_blank";
}
