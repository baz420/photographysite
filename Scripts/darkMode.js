const bodyEL = document.querySelector("body");
const linkEL = document.querySelector("a");
const setDarkButton = document.getElementById("setDark-button");

const currentMode = localStorage.getItem("current mode");

const setDarkMode = () => {
  bodyEL.style.backgroundColor = "black";
  bodyEL.style.color = "white";
  setDarkButton.textContent = "Light Mode";
  setDarkButton.style.backgroundColor = "white";
  setDarkButton.style.color = "black";
};

const setLightMode = () => {
  bodyEL.style.backgroundColor = "white";
  bodyEL.style.color = "black";
  setDarkButton.textContent = "Dark Mode";
  setDarkButton.style.backgroundColor = "black";
  setDarkButton.style.color = "white";
  setDarkButton.style.border = "1px solid white";
};

const setCurrentMode = () => {
  if (currentMode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
};

setDarkButton.addEventListener("click", function () {
  if (setDarkButton.textContent === "Dark Mode") {
    setDarkMode();
    localStorage.setItem("current mode", "dark");
  } else {
    setLightMode();
    localStorage.setItem("current mode", "light");
  }
});

setCurrentMode();
