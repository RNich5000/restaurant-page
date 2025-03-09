const clearPage = () => {
	const content = document.getElementById("content");
	content.innerHTML = "";
};

const createHeading = (title) => {
	const heading = document.createElement("h2");
	heading.textContent = title;
	return heading;
};

const createMenuItem = (heading, desc) => {
	const div = document.createElement("div");
	div.classList.add("menu-item");
	const divHeading = document.createElement("p");
	divHeading.textContent = heading;
	const divDesc = document.createElement("p");
	divDesc.textContent = desc;
	div.appendChild(divHeading);
	div.appendChild(divDesc);

	return div;
};

const createPanel = (heading, className) => {
	const section = document.createElement("div");
	section.classList.add(className);
	const sectionHeading = document.createElement("h1");
	sectionHeading.textContent = heading;
	section.appendChild(sectionHeading);

	return section;
};

export { clearPage, createHeading, createMenuItem, createPanel };
