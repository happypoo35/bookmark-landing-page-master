const wrapper = document.getElementById("wrapper");
const hamburger = document.getElementById("hamburger");
const logo = document.getElementById("logo");
const menu = document.getElementById("menu-modal");

hamburger.addEventListener("click", () => {
  wrapper.classList.toggle("active");
  hamburger.classList.toggle("active");
  logo.classList.toggle("active");
  menu.classList.toggle("show");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    wrapper.classList.remove("active");
    hamburger.classList.remove("active");
    logo.classList.remove("active");
    menu.classList.remove("show");
  }
});

const tabBtns = [...document.querySelectorAll(".tab-btn")];
const tabs = [...document.querySelectorAll(".tab")];

tabBtns.map((btn, btnId) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");

    tabs.map((tab, tabId) => {
      if (tabId !== btnId) {
        tab.classList.add("hidden");
      } else {
        tab.classList.remove("hidden");
      }

      tab.style.transform = "translateX(" + -btnId * 100 + "%)";
    });
  });
});

const questions = [...document.querySelectorAll(".accordion-item")];

questions.map((question) => {
  question.firstElementChild.addEventListener("click", () => {
    if (question.classList[1] === "active") {
      question.classList.remove("active");
    } else {
      questions.map((el) => {
        el.classList.remove("active");
      });
      question.classList.add("active");
    }
  });
});

const form = document.getElementById("form");
const input = document.getElementById("email");

const error = () => {
  setTimeout(() => {
    form.classList.remove("error");
  }, 4000);
  form.classList.add("error");
};

form.addEventListener(
  "invalid",
  (() => {
    return (e) => {
      e.preventDefault();
      error();
    };
  })(),
  true
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  input.value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

input.addEventListener("focus", () => {
  form.classList.remove("error");
});
