let  incrementEl = document.querySelector('#increment-btn');

let countEl = document.querySelector('#count-el');

let saveBtn = document.getElementById("save-btn");

let saveEl = document.getElementById("save-el");

let count = 0;

incrementEl.addEventListener('click', () => {
	count += 1;
	countEl.innerText = count;
});

saveBtn.addEventListener('click', () => {
	let countStr = `${count} ${" - "}`;
	saveEl.textContent += countStr;
	countEl.textContent = 0;
	count = 0;
});