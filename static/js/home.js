document.addEventListener('DOMContentLoaded', function() {
    // Array of words or phrases
    var words = ['Content Creator', 'Gamer', 'Editor', 'Streamer'];
    // Index for tracking the current word
    var currentWordIndex = 0;

    // Get the typewriter element
    var typewriterElement = document.getElementById('typewriter');
    // Delay between each character (in milliseconds)
    var typingSpeed = 250;

    function typewriterEffect() {
    // Get the current word
    var word = words[currentWordIndex];

    // Index for tracking the current character
    var charIndex = 0;

    // Clear the typewriter element
    typewriterElement.textContent = '';

    // Typewriter interval
    var interval = setInterval(function() {
        // Append the next character to the typewriter element
        typewriterElement.textContent += word[charIndex];

        // Move to the next character
        charIndex++;

        // Check if we reached the end of the word
        if (charIndex === word.length) {
        // Move to the next word
        currentWordIndex = (currentWordIndex + 1) % words.length;

        // Clear the interval and start typing the next word
        clearInterval(interval);
        setTimeout(typewriterEffect, 1000); // Delay before typing the next word
        }
    }, typingSpeed);
    }

    // Start the typewriter effect
    typewriterEffect();

    })
