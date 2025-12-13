// --- Screenshot Carousel Logic ---
const screenshots = ["img/w.png", "img/w1.png"];
let currentIdx = 0;

function toggleScreenshot() {
    currentIdx = (currentIdx + 1) % screenshots.length;
    const imgElement = document.getElementById('screenshot-img');
    if (imgElement) {
        imgElement.src = screenshots[currentIdx];
    }
}

// --- Navigation Logic (Home vs Terms) ---
function showTerms() {
    document.getElementById('main-content').classList.add('hidden');
    const termsContent = document.getElementById('terms-content');
    termsContent.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHome() {
    document.getElementById('terms-content').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Development Modal Logic ---
function showDevModal() {
    const modal = document.getElementById('dev-modal');
    modal.style.display = 'flex'; // Use flex to center with backdrop
}

function closeDevModal() {
    const modal = document.getElementById('dev-modal');
    modal.style.display = 'none';
}

// Close modal if clicking outside the box
window.onclick = function(event) {
    const modal = document.getElementById('dev-modal');
    // The modal element itself is the backdrop div
    if (event.target == modal) {
        closeDevModal();
    }
}