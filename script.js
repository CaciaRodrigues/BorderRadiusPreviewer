const brInput = document.getElementById('border-radiusForm');
const mutableBox = document.getElementById('mutable-box');
const textCopy = document.getElementById('border-radius_copy');

brInput.addEventListener('submit', (e) => {
    e.preventDefault();

    topLeft = e.target.elements['input-TopLeft'];
    topRight = e.target.elements['input-TopRight'];
    bottomLeft = e.target.elements['input-BottomLeft'];
    bottomRight = e.target.elements['input-BottomRight'];

    mutableBox.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;

    textCopy.innerHTML = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`

    console.log(topLeft.value, topRight.value, bottomLeft.value, bottomRight.value);
})
