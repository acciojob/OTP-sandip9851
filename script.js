//your JS code here. If required.
let inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if(index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});