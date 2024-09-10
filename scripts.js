// scripts.js
document.getElementById('measurementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra standardformulärs inlämning
    
    // Hämta värdena från formuläret
    const footLength = parseFloat(document.getElementById('footLength').value);
    const footWidth = parseFloat(document.getElementById('footWidth').value);
    
    // Kontrollera om värdena är giltiga
    if (isNaN(footLength) || isNaN(footWidth) || footLength <= 0 || footWidth <= 0) {
        document.getElementById('sizeRecommendation').textContent = 'Vänligen ange giltiga mått.';
        return;
    }
    
    // Exempel på enkel rekommendationsalgoritm
    let recommendedSize;
    if (footLength < 24) {
        recommendedSize = 'Small';
    } else if (footLength < 26) {
        recommendedSize = 'Medium';
    } else {
        recommendedSize = 'Large';
    }
    
    // Visa den rekommenderade storleken
    document.getElementById('sizeRecommendation').textContent = 'Din rekommenderade skosula storlek är: ' + recommendedSize;
});