let bg = document.querySelector('.bg');
let span = document.createElement('span');
let amount = Math.ceil(bg.clientHeight / 50) * Math.ceil(bg.clientWidth / 50);

span.classList.add('square');

for(let i = 0; i < amount; i++) {
	let cloneSpan = span.cloneNode(true);
	bg.appendChild(cloneSpan);
}
