document.addEventListener("DOMContentLoaded", function () {
  // to get the current url path
  const currentPath = window.location.pathname.split("/").pop();

  // go get all active links
  const navLinks = document.querySelectorAll("nav a");

  // to loop through each link
  navLinks.forEach((link) => {
    // so if the href attribute of the link matches the current path
    if (link.getAttribute("href") === currentPath) {
      // then add the active class
      link.classList.add("active");
    }
  });
});
