// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');
    const themeStylesheet = document.getElementById('theme-css');
    
    // Check if there's a saved theme preference in localStorage
    const savedTheme = localStorage.getItem('devvibe-theme');
    if (savedTheme) {
        setTheme(savedTheme);
        
        // Update active class on the theme options
        themeOptions.forEach(option => {
            if (option.dataset.theme === savedTheme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
    
    // Add click event listeners to theme options
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            
            // Set the theme
            setTheme(theme);
            
            // Save the theme preference to localStorage
            localStorage.setItem('devvibe-theme', theme);
            
            // Update active class
            themeOptions.forEach(opt => {
                if (opt === option) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
        });
    });
    
    // Function to set the theme
    function setTheme(theme) {
        themeStylesheet.href = `css/${theme}.css`;
    }
});
