//Declaration et initialisation de nos variables
let textEntry = document.getElementById("entryText");
let totalChar = document.getElementById("totalCount");
let remainingChar = document.getElementById("remainCount");

const MAX = 100;

let countTab = [];
let countChar = 0;
let remaining = 0;

//cette fonctionnalite permet de declencher le compte des caractere restant et entrer des que l'utilisateur commence a entrer les textes
textEntry.oninput = () => {
	let content = textEntry.value.trim();
	if (content !== "") {
		countTab.push(content);
	}

	countChar = content.length;
	totalChar.textContent = countChar;

	remaining = MAX - content.length;
	remainingChar.textContent = remaining;
};
