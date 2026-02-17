//Debut du traitement des donnees
let textEntry = document.getElementById("entryText");

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

	remaining = 100 - content.length;
	document.getElementById("remainCount").textContent = remaining;
};
