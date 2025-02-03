// Envelope Interaction
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const letter = document.getElementById('loveLetter');
    
    envelope.style.transform = 'rotate(180deg) scale(0.5)';
    setTimeout(() => {
        envelope.style.display = 'none';
        letter.style.display = 'block';
    }, 300);
}

function closeLetter() {
    const envelope = document.querySelector('.envelope');
    const letter = document.getElementById('loveLetter');
    
    letter.style.display = 'none';
    envelope.style.display = 'block';
    envelope.style.transform = 'rotate(0deg) scale(1)';
}