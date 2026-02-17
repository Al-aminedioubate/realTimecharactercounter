//Declaration et initialisation de nos variables
let textEntry = document.getElementById("entryText");
let totalChar = document.getElementById("count");
let remainingChar = document.getElementById("remainCount");

const totalRemaining = 100;

let countTab = [];
let countChar = 0;
let remaining = 0;

textEntry.oninput = () => {
	let content = textEntry.value.trim();
	if (content !== "") {
		countTab.push(content);
	}

	countChar = content.length;
	totalChar.textContent = countChar;

	remaining = totalRemaining - content.length;
	remainingChar.textContent = remaining;
};
