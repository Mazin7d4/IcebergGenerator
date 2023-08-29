document.addEventListener('DOMContentLoaded', function () {
    const selectedPhoto = document.getElementById('selected-photo');
    const textInput = document.getElementById('text-input');
    const fontSizeInput = document.getElementById('font-size');
    const fontStyleInput = document.getElementById('font-style');
    const fontColorInput = document.getElementById('font-color');
    const addTextButton = document.getElementById('add-text');
    const saveImageButton = document.getElementById('save-image');
    const resetButton = document.getElementById('reset');

    // Load selected photo
    // Implementing this functionality depends on how you want to allow users to select photos (e.g., file input or predefined options).

    // Add text to the photo
    addTextButton.addEventListener('click', function () {
        const text = textInput.value;
        const fontSize = fontSizeInput.value + 'px';
        const fontStyle = fontStyleInput.value;
        const fontColor = fontColorInput.value;

        // Create a new text element and position it on the photo
        const newTextElement = document.createElement('div');
        newTextElement.textContent = text;
        newTextElement.style.fontSize = fontSize;
        newTextElement.style.fontStyle = fontStyle;
        newTextElement.style.color = fontColor;
        newTextElement.style.position = 'absolute';
        newTextElement.style.top = '50px'; // Adjust positioning as needed
        newTextElement.style.left = '50px'; // Adjust positioning as needed

        // Append the text element to the photo container
        document.getElementById('photo-container').appendChild(newTextElement);

        // Clear the text input
        textInput.value = '';
    });

    // Save the edited image
    saveImageButton.addEventListener('click', function () {
        // Implement image saving functionality (e.g., using canvas).
    });

    // Reset the editor
    resetButton.addEventListener('click', function () {
        // Clear the photo container and reset all inputs
        const photoContainer = document.getElementById('photo-container');
        while (photoContainer.firstChild) {
            photoContainer.removeChild(photoContainer.firstChild);
        }
        textInput.value = '';
        fontSizeInput.value = '16';
        fontStyleInput.value = 'normal';
        fontColorInput.value = '#000000';
    });
});
