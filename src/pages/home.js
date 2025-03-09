import { clearPage } from "../helpers/pageHelpers";

export function loadHomePage() {
	clearPage();

	const heading = document.createElement("h1");
	heading.textContent = "This restaurant is really great and you will love it!";
	content.appendChild(heading);
}
