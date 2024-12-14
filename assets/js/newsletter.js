document.addEventListener('DOMContentLoaded', function() {
    // Create popup elements
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const popup = document.createElement('div');
    popup.className = 'newsletter-popup';
    popup.innerHTML = `
        <button class="close-button">&times;</button>
        <h3>Rejoignez notre communauté</h3>
        <p>Recevez nos meilleurs conseils en biohacking et des contenus exclusifs directement dans votre boîte mail.</p>
        <form id="popup-newsletter">
            <input type="email" placeholder="Votre email" required>
            <button type="submit">S'abonner</button>
        </form>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Show popup after 5 seconds
    setTimeout(() => {
        if (!localStorage.getItem('newsletter-subscribed')) {
            overlay.classList.add('show');
            popup.classList.add('show');
        }
    }, 5000);
    
    // Close popup
    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        overlay.classList.remove('show');
        popup.classList.remove('show');
    });
    
    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
        popup.classList.remove('show');
    });
    
    // Handle form submissions
    const forms = document.querySelectorAll('.newsletter-form, #popup-newsletter');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]').value;
            
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Store subscription status
                localStorage.setItem('newsletter-subscribed', 'true');
                
                // Show success message
                const button = form.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Inscrit !';
                button.style.backgroundColor = '#48BB78';
                
                // Close popup if it's the popup form
                if (form.id === 'popup-newsletter') {
                    setTimeout(() => {
                        overlay.classList.remove('show');
                        popup.classList.remove('show');
                    }, 1500);
                }
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                }, 3000);
                
                // Clear form
                form.reset();
                
            } catch (error) {
                console.error('Error:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        });
    });
    
    // Add scroll tracking
    let lastScrollPosition = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const currentPosition = window.pageYOffset;
            const isScrollingUp = currentPosition < lastScrollPosition;
            const isNearBottom = (window.innerHeight + currentPosition) >= document.documentElement.scrollHeight - 300;
            
            if ((isScrollingUp || isNearBottom) && !localStorage.getItem('newsletter-subscribed')) {
                overlay.classList.add('show');
                popup.classList.add('show');
            }
            
            lastScrollPosition = currentPosition;
        }, 100);
    });
});
