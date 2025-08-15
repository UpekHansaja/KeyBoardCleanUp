document.addEventListener('DOMContentLoaded', function() {
    const exitBtn = document.getElementById('exit-btn');
    const lastKeyDisplay = document.getElementById('last-key');
    const keyCountDisplay = document.getElementById('key-count');
    let keyCount = 0;
    
    // Function to handle key presses
    function handleKeyPress(event) {
        // Prevent default behavior for all key presses
        event.preventDefault();
        
        // Update the display with the key pressed
        const keyName = event.key || 'Unknown';
        lastKeyDisplay.textContent = keyName;
        
        // Update counter
        keyCount++;
        keyCountDisplay.textContent = keyCount;
        
        // Add visual feedback
        const ripple = document.createElement('div');
        ripple.classList.add('key-ripple');
        document.body.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 500);
        
        return false;
    }
    
    // Add event listeners for all keyboard events
    document.addEventListener('keydown', handleKeyPress, { passive: false });
    document.addEventListener('keyup', handleKeyPress, { passive: false });
    document.addEventListener('keypress', handleKeyPress, { passive: false });
    
    // Special handling for function keys, browser shortcuts, etc.
    window.addEventListener('beforeunload', function(e) {
        // Cancel the event to prevent browser shortcuts from working
        e.preventDefault();
        // Chrome requires returnValue to be set
        e.returnValue = '';
        return '';
    });
    
    // Only allow exiting via mouse/touchpad click
    exitBtn.addEventListener('click', function() {
        // Visual feedback before exiting
        this.textContent = 'Exiting...';
        this.style.backgroundColor = 'var(--color-success)';
        
        setTimeout(() => {
            // Remove all event listeners
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('keyup', handleKeyPress);
            document.removeEventListener('keypress', handleKeyPress);
            
            // Update status indicator
            const statusIndicator = document.querySelector('.status-indicator');
            statusIndicator.classList.remove('active');
            document.querySelector('.status p').textContent = 'Keyboard cleaning mode deactivated';
            
            // Show confirmation
            alert('Keyboard cleaning mode has been deactivated.\nYou can now use your keyboard normally.');
            
            // Redirect to a blank page or reload
            window.location.reload();
        }, 1000);
    });
    
    // Additional CSS for the key press ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                width: 0;
                height: 0;
                opacity: 0.8;
            }
            100% {
                width: 500px;
                height: 500px;
                opacity: 0;
            }
        }
        
        .key-ripple {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background-color: var(--brand-primary);
            border-radius: 50%;
            animation: ripple 0.5s ease-out;
            pointer-events: none;
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Warn when using keyboard shortcuts that might bypass our handlers
    window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Prevent tab switching, etc.
    window.addEventListener('blur', function() {
        window.focus();
    });
    
    // Display initial notification
    const isTouch = 'ontouchstart' in window;
    const exitMethod = isTouch ? 'tap the button' : 'click the button with your mouse/trackpad';
    
    setTimeout(() => {
        alert(`Keyboard Cleaning Mode Activated\n\nYour keyboard inputs are now being captured.\nYou can safely clean your keyboard without triggering unwanted actions.\n\nTo exit, ${exitMethod}.`);
    }, 500);
});
