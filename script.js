
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += button.innerText;
        }
    });
});