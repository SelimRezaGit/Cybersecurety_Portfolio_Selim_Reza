const typingEffect = () => {
    const words = ["Cybersecurity Expert.", "Ethical Hacker.", "Bug Bounty Hunter.", "System Defender."];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === words.length) {
            count = 0;
        }
        currentText = words[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".typing").textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait 2 seconds after finishing a word
        } else {
            setTimeout(type, 100); // Speed of typing each letter
        }
    }());
};

typingEffect();