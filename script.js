const slider = document.getElementById("myrange");
const output = document.getElementById("demo");
const grids = document.querySelector('.grids');
const cbtn = document.getElementById("cbtn");
const rbtn = document.getElementById("rbtn");
const ebtn = document.getElementById("ebtn");
const clrbtn = document.getElementById("clrbtn");

output.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = function () {
    output.textContent = this.value + ' x ' + this.value;
    setupGrid();
    setupColor();
}

clrbtn.onclick = () => document.querySelectorAll('.grid').forEach(grid => grid.style.backgroundColor = '#ffff');
ebtn.onclick = () => setupColor('#ffff');
cbtn.onclick = () => setupColor();
rbtn.onclick = () => setupColor('rainbow');

function setupGrid() {
    const boxes = document.querySelectorAll('.grid');
    boxes.forEach(box => box.remove());

    for (let i = 0; i < slider.value * slider.value; i++) {
        let div = document.createElement('div');
        div.classList.add('grid');
        grids.appendChild(div);
    }
    grids.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    grids.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
}

function setupColor(color) {
    cbtn.classList.remove('btn-color');
    ebtn.classList.remove('btn-color');
    rbtn.classList.remove('btn-color');
    var grid = document.querySelectorAll('.grid');

    if (color === undefined) {
        cbtn.classList.add('btn-color');
        grid.forEach(gr => gr.addEventListener('mouseover', () => gr.style.backgroundColor = `${document.getElementById("favcolor").value}`));
    }
    else if (color === 'rainbow') {
        rbtn.classList.add('btn-color');
        grid.forEach(gr => gr.addEventListener('mouseover', () => gr.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`));
    }
    else {
        ebtn.classList.add('btn-color');
        grid.forEach(gr => gr.addEventListener('mouseover', () => gr.style.backgroundColor = `${color}`));
    }
}

setupGrid();
setupColor();


