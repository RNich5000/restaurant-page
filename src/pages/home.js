export function loadHomePage() {
	const content = document.getElementById("content");
	content.innerHTML = "";

	const heading = document.createElement("h1");
	heading.textContent = "This restaurant is really great and you will love it!";
	content.appendChild(heading);
}
