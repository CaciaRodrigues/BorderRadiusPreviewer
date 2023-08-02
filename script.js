const allAtOnceBtn = document.getElementById('all-at-once'); // Botão para mostrar a seção All at once
const allAtOnceMenu = document.getElementById('allatonce-section'); // Seção All at once

const IndividualCornersBtn = document.getElementById('individual-corners'); // Botão para mostrar a seção Individual Corners
const IndividualCornersMenu = document.getElementById('individual-corners-section'); // Seção Individual Corners

const elipticalCornersBtn = document.getElementById('eliptical-corners'); // Botão para mostrar a seção Eliptical Corners
const elipticalCornersMenu = document.getElementById('eliptical-corners-section'); // Seção Eliptical Corners

//Evento para mostrar a seção All at once
allAtOnceBtn.addEventListener('click', () => {
    allAtOnceMenu.style.display = 'flex';
    IndividualCornersMenu.style.display = 'none';
    elipticalCornersMenu.style.display = 'none';
})

//Evento para mostrar a seção Individual Corners
IndividualCornersBtn.addEventListener('click', () => {
    IndividualCornersMenu.style.display = 'flex';
    allAtOnceMenu.style.display = 'none';
    elipticalCornersMenu.style.display = 'none';
})

//Evento para mostrar a seção Eliptical Corners
elipticalCornersBtn.addEventListener('click', () => {
    elipticalCornersMenu.style.display = 'flex';
    allAtOnceMenu.style.display = 'none';
    IndividualCornersMenu.style.display = 'none';
})