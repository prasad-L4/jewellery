document.addEventListener("DOMContentLoaded", function () {
  
    document
      .getElementById("toggleSidebarBtn")
      .addEventListener("click", function () {
        var sidebar = document.getElementById("sidebar");
        sidebar.style.display =
          sidebar.style.display === "none" || sidebar.style.display === ""
            ? "block"
            : "none";
      });

  document
  .getElementById("closeSidebarBtn")
  .addEventListener("click", function () {
    document.getElementById("sidebar").style.display = "none";
    });

  
  });

  document.addEventListener("DOMContentLoaded", function () {
  
    document
      .getElementById("toggleSidebar1Btn")
      .addEventListener("click", function () {
        var sidebar = document.getElementById("sidebar1");
        sidebar.style.display =
          sidebar.style.display === "none" || sidebar.style.display === ""
            ? "block"
            : "none";
      });

  document
  .getElementById("closeSidebar1Btn")
  .addEventListener("click", function () {
    document.getElementById("sidebar1").style.display = "none";
    });

  
  });