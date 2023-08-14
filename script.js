const box = document.getElementById('mutable-box'); // Caixa de demonstração
const copyBtn = document.getElementById('copy-button'); // Botão para copiar para o clipboard
const brCopy = document.getElementById('border-radius-copy'); // Texto para ser copiado usando clipboard
// Criando um array dos elementos de input para poder manipula-los usando map e forEach
const cornerInputs = [ 
    {element: document.getElementById('top-left'), name: 'TopLeft'},
    {element: document.getElementById('top-right'), name: 'TopRight'},
    {element: document.getElementById('bottom-right'), name: 'BottomRight'},
    {element: document.getElementById('bottom-left'), name: 'BottomLeft'},
];

brCopy.innerHTML = '0 0 0 0';

//Função para atualizar o propriedade border-radius da caixa e exibir os valores dentro dela
function updateBorderRadius() {
    const brValues = cornerInputs.map(input => `${input.element.value}%`).join(' ');
    
    box.style.borderRadius = brValues;

    // brCopy.style.display = 'block';
    brCopy.innerHTML = brValues;

    // copyBtn.style.display = 'block';
}

cornerInputs.forEach(inputData => {
    inputData.element.addEventListener('input', updateBorderRadius);
});

copyBtn.addEventListener('click', function() {
    const text = brCopy.textContent;

    navigator.clipboard.writeText(text)
    .then(() => {
        alert(`Text copied to clipboard: ${text}`)
    });
});

// const brInput = document.getElementById('border-radiusForm');
// const mutableBox = document.getElementById('mutable-box');
// const textCopy = document.getElementById('border-radius_copy');

// brInput.addEventListener('submit', (e) => {
//     e.preventDefault();

//     topLeft = e.target.elements['input-TopLeft'];
//     topRight = e.target.elements['input-TopRight'];
//     bottomLeft = e.target.elements['input-BottomLeft'];
//     bottomRight = e.target.elements['input-BottomRight'];

//     mutableBox.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;

//     textCopy.innerHTML = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`

//     console.log(topLeft.value, topRight.value, bottomLeft.value, bottomRight.value);
// })
