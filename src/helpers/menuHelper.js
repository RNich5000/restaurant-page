const createHeading = (title) => {
	const heading = document.createElement("h2");
	heading.textContent = title;
	return heading;
};

const createMenuItem = (heading, desc) => {
	const bruschetta = document.createElement("div");
	bruschetta.classList.add("menu-item");
	const bruschettaTitle = document.createElement("p");
	bruschettaTitle.textContent = heading;
	const bruschettaDesc = document.createElement("p");
	bruschettaDesc.textContent = desc;
	bruschetta.appendChild(bruschettaTitle);
	bruschetta.appendChild(bruschettaDesc);

	return bruschetta;
};

export { createHeading, createMenuItem };
