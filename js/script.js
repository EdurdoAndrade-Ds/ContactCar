let counter = 0;
setInterval(() => {
	const el =
	document.querySelector('.number');
	const elValue =
	Number(el.getAttribute('data-value'));
	if (counter !== elValue) {
		counter++;
		el.innerHTML = '${counter}%';
	}
}, 80);


const imagens = [
    "./img/taxi2.png",
    "./img/taxi3.png",
    "./img/taxi4.png",
    "./img/taxi5.png",
    "./img/taxi6.png",
    "./img/taxi7.png",
    "./img/taxi.png",
    
];

let indiceAtual = 0; 

function trocarImagem() {

const img = document.getElementById("minhaImagem");
indiceAtual = (indiceAtual + 1) % imagens.length;
img.src = imagens[indiceAtual];
}

setInterval(trocarImagem, 3000);