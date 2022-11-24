const tapMenuButtun = document.querySelectorAll(".tap-menu-button");
const tapMenuContent = document.querySelectorAll(".tap-menu-content");
const tapMenuArea = document.querySelector(".tap-menu-area");

tapMenuButtun.forEach((btn) => {
    btn.addEventListener("click", function () {
    for (const element of tapMenuArea.children) {
      if (element.dataset.id !== btn.dataset.id) {
        element.classList.remove("selected");
      } else {
        element.classList.add("selected");
      }
    }
    tapMenuContent.forEach((content) => {
      if (content.dataset.id !== btn.dataset.id) {
        content.classList.remove("active");
        content.classList.add("disable");
      } else {
        content.classList.remove("disable");
        content.classList.add("active");
      }
    });
    
  });
});
