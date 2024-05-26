window.onload = function() {
  document.getElementById("code-1").focus();
};
let inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if(index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
    input.addEventListener('keydown', (e) => {
        if(e.key === "Backspace" && input.value === "" && index > 0) {
            inputs[index - 1].focus();
        }
    });
});