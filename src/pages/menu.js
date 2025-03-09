import { createHeading, createMenuItem } from "../helpers/menuHelper";

export function loadMenuPage() {
	const bruschetta = "Bruschetta (V) (VG)";
	const bruschettaText =
		"A rustic symphony of ripe Roma tomatoes, creamy avocado, and fragrant oregano, layered with fresh basil leaves and a delicate shaving of Parmesan, all resting atop crisp, golden sourdough.";
	const fillet = "Fillet 200g";
	const filletText =
		"A perfectly seared 200g Monte grain-fed fillet with a marbling score of 2+, renowned for its tender, juicy texture and rich, mouthwatering flavor.";
	const sd = "Sticky Date";
	const sdText =
		"A decadent sticky date sponge, drenched in a luscious beef dripping butterscotch sauce, adorned with delicate walnut tuiles, silky crème anglaise, and a scoop of fior di latte gelato.";
	const yuzu = "Yuzu and Finger Lime Cured Kingfish";
	const yuzuText =
		"Delicate slices of fresh kingfish cured with yuzu and Australian finger lime, served with shiso leaves, pickled cucumber, and adrizzle of sesame oil.";
	const kangaroo = "Lemongrass Kangaroo Loin with Coconut Jasmine Rice";
	const kangarooText =
		"Seared kangaroo loin infused with lemongrass and ginger, accompanied by coconut jasmine rice and stir-fried Asian greens in a tamari and garlic glaze.";
	const pc = "Wattle Seed and Matcha Panna Cotta";
	const pcText =
		"Silky panna cotta flavored with wattle seed and matcha, topped with a salted caramel miso drizzle and toasted macadamia nuts.";

	const content = document.getElementById("content");
	content.innerHTML = "";

	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	// create LHS panel
	const lhs = document.createElement("div");
	lhs.classList.add("lhs");
	const setMenu1 = document.createElement("h1");
	setMenu1.textContent = "Set Menu 1";
	lhs.appendChild(setMenu1);

	lhs.appendChild(createHeading("Entree"));
	lhs.appendChild(createMenuItem(bruschetta, bruschettaText));

	lhs.appendChild(createHeading("Main"));
	lhs.appendChild(createMenuItem(fillet, filletText));

	lhs.appendChild(createHeading("Dessert"));
	lhs.appendChild(createMenuItem(sd, sdText));

	// create RHS panel
	const rhs = document.createElement("div");
	rhs.classList.add("rhs");
	const setMenu2 = document.createElement("h1");
	setMenu2.textContent = "Set Menu 2";
	rhs.appendChild(setMenu2);

	rhs.appendChild(createHeading("Entree"));
	rhs.appendChild(createMenuItem(yuzu, yuzuText));

	rhs.appendChild(createHeading("Main"));
	rhs.appendChild(createMenuItem(kangaroo, kangarooText));

	rhs.appendChild(createHeading("Dessert"));
	rhs.appendChild(createMenuItem(pc, pcText));

	menuContainer.appendChild(lhs);
	menuContainer.appendChild(rhs);
	content.appendChild(menuContainer);
}
