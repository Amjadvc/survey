// Start handel navBar
const buttonContainer = document.querySelector(".buttonContainer");
const ButtomBar = document.querySelector(".ButtomBar");
const ButtomCroos = document.querySelector(".ButtomCroos");
const navBar = document.querySelector(".navBar");

let active = false;

buttonContainer ? buttonContainer.addEventListener("click", handelNavBar) : "";

function handelNavBar() {
  active = !active;
  console.log(active);
  if (active === true) {
    ButtomCroos.classList.remove("hidden");
    ButtomBar.classList.add("hidden");
    navBar.classList.remove("max-[769px]:hidden");
  } else {
    ButtomCroos.classList.add("hidden");
    ButtomBar.classList.remove("hidden");

    navBar.classList.remove("animate-navAnimateFadIn");
    navBar.classList.add("animate-navAnimateFadOut");
    setTimeout(() => {
      navBar.classList.add("max-[769px]:hidden");

      navBar.classList.add("animate-navAnimateFadIn");
      navBar.classList.remove("animate-navAnimateFadOut");
    }, 400);
  }
}

// //Start handel active
const navLinkEls = document.querySelectorAll("nav a");
const windowPathName = window.location.pathname;
navLinkEls.forEach((navLinkEl) => {
  const navLinkPathName = new URL(navLinkEl.href).pathname;

  if (windowPathName === navLinkPathName) {
    let parentEle = navLinkEl.parentElement;
    let parentEle_InnerSpan = parentEle.getElementsByTagName("span")[0];

    parentEle.classList.add("text-primary", "max-[769px]:text-[#2f4650]");
    parentEle_InnerSpan
      ? parentEle_InnerSpan.classList.add("before:w-full")
      : "";
  }
});
