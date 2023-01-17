const boxes = document.querySelectorAll('.box');
const addBoxButton = document.querySelector('.add-box-button');
const colorButtons = document.querySelectorAll('.color-button');

addBoxButton.addEventListener('click', () => {
    // Keep Boxes within screen width
    const totalWidth = Array.from(boxes).reduce((total, box) => {
        return total + box.offsetWidth;
    }, 0);

    if (totalWidth >= window.innerWidth) {
        return;
    }

    // Create a new box
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `
        <textarea placeholder="Type here"></textarea>
          
        <button class="color-button">Change color</button>
    `;
    document.body.appendChild(newBox);
    const newColorButton = newBox.querySelector('.color-button');

    newColorButton.addEventListener('click', () => {
        newBox.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
});
colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
});