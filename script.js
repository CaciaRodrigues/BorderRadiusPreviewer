const box = document.getElementById('mutable-box'); // Caixa de demonstração
const squareButton = document.getElementById('square-button'); // botão para formato quadrado
const rectangleButton = document.getElementById('rectangle-button'); //botão para formato retangular
const copyBtn = document.getElementById('copy-button'); // Botão para copiar para o clipboard
const brCopy = document.getElementById('border-radius-copy'); // Texto para ser copiado usando clipboard
// Criando um array dos elementos de input para poder manipula-los usando map e forEach
const cornerInputs = [ 
    {element: document.getElementById('top-left'), name: 'TopLeft'},
    {element: document.getElementById('top-right'), name: 'TopRight'},
    {element: document.getElementById('bottom-right'), name: 'BottomRight'},
    {element: document.getElementById('bottom-left'), name: 'BottomLeft'},
];

//Atualização para o tamanho da Caixa
squareButton.addEventListener('click', () => {
    box.className = 'mutable-box square-shape';
})

rectangleButton.addEventListener('click', () => {
    box.className = 'mutable-box rectangle-shape';
})

brCopy.innerHTML = '0 0 0 0';

//Função para atualizar o propriedade border-radius da caixa e exibir os valores dentro dela
function updateBorderRadius() {
    const brValues = cornerInputs.map(input => `${input.element.value}%`).join(' ');
    
    box.style.borderRadius = brValues;

    brCopy.innerHTML = brValues;
}

cornerInputs.forEach(inputData => {
    inputData.element.addEventListener('input', updateBorderRadius);
});

copyBtn.addEventListener('click', function() {
    const text = brCopy.textContent;

    navigator.clipboard.writeText(`border-radius: ${text};`)
    .then(() => {
        alert(`Text copied to clipboard: " border-radius: ${text}; "`) 
    });
});