for (let element of document.querySelectorAll(".typing")) {
	let length = element.textContent.length;
	element.style.setProperty("--length", length);
}