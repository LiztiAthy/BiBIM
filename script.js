// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const sounds = {
        'A': 'sound/A.mp3',
        'B': 'path/to/sound/B.mp3',
        'C': 'path/to/sound/C.mp3',
        'D': 'path/to/sound/D.mp3',
        'E': 'path/to/sound/E.mp3',
        'F': 'path/to/sound/F.mp3',
        'G': 'path/to/sound/G.mp3',
        'H': 'path/to/sound/H.mp3',
        'I': 'path/to/sound/I.mp3',
        'J': 'path/to/sound/J.mp3',
        'K': 'path/to/sound/K.mp3',
        'L': 'path/to/sound/L.mp3',
        'M': 'path/to/sound/M.mp3',
        'N': 'path/to/sound/N.mp3',
        'O': 'path/to/sound/O.mp3',
        'P': 'path/to/sound/P.mp3',
        'Q': 'path/to/sound/Q.mp3',
        'R': 'path/to/sound/R.mp3',
        'S': 'path/to/sound/S.mp3',
        'T': 'path/to/sound/T.mp3',
        'U': 'path/to/sound/U.mp3',
        'V': 'path/to/sound/V.mp3',
        'W': 'path/to/sound/W.mp3',
        'X': 'path/to/sound/X.mp3',
        'Y': 'path/to/sound/Y.mp3',
        'Z': 'path/to/sound/Z.mp3'
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
