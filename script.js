function scrollToProjects() {
    // Smooth scroll to projects section (if it exists)
    // For now, just show an alert or you can add a projects section later
    alert('Projects section coming soon! This button is ready to link to your projects.');
    
    // Alternative: If you have a projects section, uncomment below:
    // const projectsSection = document.getElementById('projects');
    // if (projectsSection) {
    //     projectsSection.scrollIntoView({ behavior: 'smooth' });
    // }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cta-button');
    
    // Check if button exists before adding event listener
    if (button) {
        // Add ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});
