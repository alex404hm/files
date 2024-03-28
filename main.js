if (location.pathname == "/") {
  $(".homepage-class").addClass("active");
} else {
  $(`li a[href^='/${ location.pathname.split("/")[1] }']`).addClass("active");
};

if (localStorage.getItem("theme")) {
  $("body").attr("data-theme", localStorage.getItem("theme"))
} else {
  localStorage.setItem("theme", "light")
}

const currentTheme = localStorage.getItem("theme");

let checked;

if (currentTheme === "light") {
  checked = true;
} else {
  checked = false;
};

$("#theme-switch").prop("checked", checked);

const switchTheme = () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
      localStorage.setItem("theme", "dark");
      $("body").attr("data-theme", "dark");
  } else {
      localStorage.setItem("theme", "light");
      $("body").attr("data-theme", "light");
  };
};

$(".textarea").each(function () {
  this.setAttribute("style", "height: " + this.scrollHeight + "px; overflow-y: hidden;");
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}
