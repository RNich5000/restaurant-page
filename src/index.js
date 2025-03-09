import "./style.css";
import { loadHomePage } from "./pages/home.js";
import { loadMenuPage } from "./pages/menu.js";
import { loadContactPage } from "./pages/contact.js";

const homeButton = document.getElementById("btn-home");
homeButton.addEventListener("click", () => {
	loadHomePage();
});
const menuButton = document.getElementById("btn-menu");
menuButton.addEventListener("click", () => {
	loadMenuPage();
});
const contactButton = document.getElementById("btn-contact");
contactButton.addEventListener("click", () => {
	loadContactPage();
});

loadContactPage();
