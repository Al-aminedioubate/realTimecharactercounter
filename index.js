//Declaration et initialisation de nos variables
let textEntry = document.getElementById("entryText");
let totalChar = document.getElementById("totalCount");
let remainingChar = document.getElementById("remainCount");

const totalRemaining = 100;

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

	remaining = totalRemaining - content.length;
	remainingChar.textContent = remaining;

	if (remaining == 0) {
		alert("vous n'avez plus d'espace!");
	}
};
