let wrapper = document.querySelector(".wrapper");
let loginLink = document.querySelector(".login-link");
let registerLink = document.querySelector(".register-link");
let btnPopup = document.querySelector(".btnlogin-popup");
let iconClose = document.querySelector(".icon-close");


//Login button
btnPopup.addEventListener("click", (eo) => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", (eo) => {
  wrapper.classList.remove("active-popup");
});

//if i click in Register this code will active
registerLink.addEventListener("click", (eo) => {
  wrapper.classList.add("active");
});

//if i click in login this code will active
loginLink.addEventListener("click", (eo) => {
  wrapper.classList.remove("active");
});
/* created by taha alawa */