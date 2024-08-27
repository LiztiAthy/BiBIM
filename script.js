// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const sounds = {
        'A': 'sound/A.wav',
        'B': 'sound/B.wav',
        'C': 'sound/C.wav',
        'D': 'sound/D.wav',
        'E': 'sound/E.wav',
        'F': 'sound/F.wav',
        'G': 'sound/G.wav',
        'H': 'sound/H.wav',
        'I': 'sound/I.wav',
        'J': 'sound/J.wav',
        'K': 'sound/K.wav',
        'L': 'sound/L.wav',
        'M': 'sound/M.wav',
        'N': 'sound/N.wav',
        'O': 'sound/O.wav',
        'P': 'sound/P.wav',
        'Q': 'sound/Q.wav',
        'R': 'sound/R.wav',
        'S': 'sound/S.wav',
        'T': 'sound/T.wav',
        'U': 'sound/U.wav',
        'V': 'sound/V.wav',
        'W': 'sound/W.wav',
        'X': 'sound/X.wav',
        'Y': 'sound/Y.wav',
        'Z': 'sound/Z.wav'
    };

    cards.forEach(card => {
        // Get the letter from the card (assuming it's in a data attribute)
        const letter = card.getAttribute('data-letter'); // Example: data-letter="A"

        // Create an audio element for the sound
        const audio = new Audio(sounds[letter]);

        // Add click event to flip the card and play sound
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            audio.play();
        });

        // Add click event to pop out the image on the back
        card.querySelector('.card-back img').addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent flip when clicking on the image
            const imageSrc = event.target.src;
            openPopup(imageSrc);
        });
    });
});

// Function to open popup with the image
function openPopup(imageSrc) {
    // Create a popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    // Create a popup content wrapper
    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    // Create the image element
    const popupImage = document.createElement('img');
    popupImage.src = imageSrc;
    popupImage.alt = 'Popup Image';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(popupContainer);
    });

    // Append image and close button to popup content
    popupContent.appendChild(popupImage);
    popupContent.appendChild(closeButton);

    // Append popup content to popup container
    popupContainer.appendChild(popupContent);

    // Append popup container to body
    document.body.appendChild(popupContainer);

    // Close popup when clicking outside the content area
    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            document.body.removeChild(popupContainer);
        }
    });
}
