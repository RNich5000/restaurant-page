import { clearPage } from "../helpers/pageHelpers";

export function loadContactPage() {
	clearPage();

	const container = document.createElement("div");
	container.classList.add("contact-container");

	const phoneMail = document.createElement("div");
	phoneMail.id = "phone-email";

	const phone = document.createElement("p");
	const anchor = document.createElement("a");
	anchor.href = "tel:0412345678";
	anchor.textContent = "0412 345 678";
	phone.textContent = "Phone us: ";
	phone.appendChild(anchor);

	const email = document.createElement("p");
	const emailAnchor = document.createElement("a");
	emailAnchor.href = "mailto:fake.address@fakey.com";
	emailAnchor.textContent = "Email us";
	email.appendChild(emailAnchor);

	phoneMail.appendChild(phone);
	phoneMail.appendChild(email);

	const inputContainer = document.createElement("div");
	inputContainer.classList.add("input-text");
	const textArea = document.createElement("textarea");
	textArea.id = "contact-area";
	textArea.rows = 6;
	textArea.cols = 80;
	const btn = document.createElement("button");
	btn.id = "send-message";
	btn.textContent = "Send your message!";

	inputContainer.appendChild(textArea);
	inputContainer.appendChild(btn);

	container.appendChild(phoneMail);
	container.appendChild(inputContainer);
	const content = document.getElementById("content");
	content.appendChild(container);
}
