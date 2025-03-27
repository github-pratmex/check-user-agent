// Device detection function
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const messageElement = document.getElementById("message");

    // Mobile detection
    const isMobile = /iphone|android|blackberry|opera mini|windows phone|mobile/.test(userAgent);

    // Tablet detection (including iPad)
    const isTablet = /ipad|tablet|playbook|kindle|silk/.test(userAgent) || 
                     (navigator.maxTouchPoints > 1 && /macintosh/.test(userAgent));

    // "Desktop Site" mode detection on mobile
    const isSmallScreen = window.innerWidth <= 1024 && isMobile;

    if (isSmallScreen) {
        // Treat "Desktop Site" on mobile as mobile
        messageElement.textContent = "For a better experience, please open this website on a laptop or PC.";
    } else if (isTablet) {
        messageElement.textContent = "For a better experience, attach a keyboard or switch to a laptop or PC.";
    } else if (isMobile) {
        messageElement.textContent = "For a better experience, please open this website on a laptop or PC.";
    } else {
        messageElement.textContent = "You're using a laptop or PC. Enjoy the full experience!";
    }
}

// Run the detection on page load
window.onload = detectDevice;
