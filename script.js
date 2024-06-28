document.addEventListener('DOMContentLoaded', () => {
    const decrementButtons = document.querySelectorAll('.decrementButton');

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const counterId = button.getAttribute('data-counter');
            const counterElement = document.getElementById(counterId);
            let counterValue = parseInt(counterElement.textContent);

            counterValue--;
            if (counterValue <= 0) {
                counterElement.textContent = 'Bravo !';
                button.disabled = true;
            } else {
                counterElement.textContent = counterValue;
            }
        });
    });
});
