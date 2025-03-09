import {
	clearPage,
	createHeading,
	createMenuItem,
	createPanel,
} from "../helpers/pageHelpers";

import * as consts from "../helpers/consts";

export function loadMenuPage() {
	clearPage();

	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	const lhs = createPanel("Set Menu 1");
	lhs.appendChild(createHeading("Entree"));
	lhs.appendChild(createMenuItem(consts.bruschetta, consts.bruschettaText));
	lhs.appendChild(createHeading("Main"));
	lhs.appendChild(createMenuItem(consts.fillet, consts.filletText));
	lhs.appendChild(createHeading("Dessert"));
	lhs.appendChild(createMenuItem(consts.sd, consts.sdText));

	const rhs = createPanel("Set Menu 2");
	rhs.appendChild(createHeading("Entree"));
	rhs.appendChild(createMenuItem(consts.yuzu, consts.yuzuText));
	rhs.appendChild(createHeading("Main"));
	rhs.appendChild(createMenuItem(consts.kangaroo, consts.kangarooText));
	rhs.appendChild(createHeading("Dessert"));
	rhs.appendChild(createMenuItem(consts.pc, consts.pcText));

	menuContainer.appendChild(lhs);
	menuContainer.appendChild(rhs);

	const content = document.getElementById("content");
	content.appendChild(menuContainer);
}
