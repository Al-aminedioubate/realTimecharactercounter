//Declaration et initialisation de nos variables
let textEntry = document.getElementById("entryText");
let totalChar = document.getElementById("count");
let remainingChar = document.getElementById("remainCount");

let countTab = [];
let count = 0;
let remaining = 0;

textEntry.onchange = () => {
	let content = textEntry.value.trim();
	if (content !== "") {
		countTab.push(content);
	}

	for (let i = 0; i < countTab.length; i++) {
		console.log(countTab[i]);
	}

	count = content.length;
	totalChar.textContent = count;

	remaining = 100 - content.length;
	remainingChar.textContent = remaining;
};
