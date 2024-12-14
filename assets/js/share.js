function share(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent(document.querySelector('meta[name="description"]')?.content || '');
    
    let shareUrl;
    
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${text}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        default:
            return;
    }
    
    // Open share window
    window.open(shareUrl, '_blank', 'width=600,height=400,location=0,menubar=0');
}

// Add floating share button
document.addEventListener('DOMContentLoaded', function() {
    const article = document.querySelector('article');
    if (!article) return;
    
    const shareButton = document.createElement('button');
    shareButton.className = 'floating-share-button';
    shareButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
    `;
    
    document.body.appendChild(shareButton);
    
    // Show share menu on click
    shareButton.addEventListener('click', function() {
        const menu = document.createElement('div');
        menu.className = 'floating-share-menu';
        menu.innerHTML = `
            <button onclick="share('twitter')">Twitter</button>
            <button onclick="share('linkedin')">LinkedIn</button>
            <button onclick="share('facebook')">Facebook</button>
        `;
        
        // Position menu next to button
        const rect = shareButton.getBoundingClientRect();
        menu.style.top = rect.top + 'px';
        menu.style.left = (rect.left - 150) + 'px';
        
        document.body.appendChild(menu);
        
        // Remove menu when clicking outside
        function removeMenu(e) {
            if (!menu.contains(e.target) && e.target !== shareButton) {
                menu.remove();
                document.removeEventListener('click', removeMenu);
            }
        }
        
        setTimeout(() => document.addEventListener('click', removeMenu), 0);
    });
    
    // Show/hide button based on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop) {
            // Scrolling down
            shareButton.style.transform = 'translateY(100px)';
        } else {
            // Scrolling up
            shareButton.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
});
