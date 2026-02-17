//Debut du traitement des donnees
let textEntry = document.getElementById("entryText");

let countTab = [];
let content = textEntry.value;
countTab.push(content);
console.log(countTab);

textEntry.onchange = () => {
	for (let i = 0; i < countTab.length; i++) {
		console.log(countTab[i + 1]);
	}
};
