const headerLink = document.querySelectorAll("li.navLink");
const dropdown = document.querySelectorAll("div.dropdownNav");

headerLink.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    dropdown[index].classList.remove("hidden");
    dropdown[index].classList.add("flex");

    if (index != 0) {
      dropdown[index - 1].classList.remove("flex");
      dropdown[index - 1].classList.add("hidden");
    }

    if (index != headerLink.length - 1) {
      dropdown[index + 1].classList.remove("flex");
      dropdown[index + 1].classList.add("hidden");
    }
  });
});

dropdown.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    dropdown[index].classList.remove("hidden");
    dropdown[index].classList.add("flex");
  });
  item.addEventListener("mouseleave", () => {
    dropdown[index].classList.remove("flex");
    dropdown[index].classList.add("hidden");
  });
});
