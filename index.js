//Debut du traitement des donnees
let textEntry = document.getElementById("entryText");

let countTab = [];
let count = 0;

textEntry.onchange = () => {
	let content = textEntry.value.trim();
	if (content !== "") {
		countTab.push(content);
	}

	for (let i = 0; i < countTab.length; i++) {
		console.log(countTab[i]);
	}

	count = content.length;
	document.getElementById("count").textContent = count;
	console.log("le nombre est : " + count);

    
};
