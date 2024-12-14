// Schema.org structured data
const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BiohackingBlog",
    "description": "Découvrez les secrets scientifiques pour reprogrammer votre corps et votre esprit. Optimisation cognitive, énergie, sommeil et performance naturelle.",
    "url": "https://biohackingblog.fr",
    "publisher": {
        "@type": "Organization",
        "name": "BiohackingBlog",
        "logo": {
            "@type": "ImageObject",
            "url": "https://biohackingblog.fr/assets/images/logo.png"
        }
    },
    "mainEntity": {
        "@type": "Blog",
        "blogPost": [
            {
                "@type": "BlogPosting",
                "headline": "Optimisation du Microbiote pour la Santé Mentale et Physique",
                "image": "https://images.unsplash.com/photo-1579126038374-6064e9370f0f",
                "datePublished": "2024-12-14",
                "author": {
                    "@type": "Person",
                    "name": "BiohackingBlog Team"
                }
            },
            {
                "@type": "BlogPosting",
                "headline": "Guide Complet des Nootropiques Naturels",
                "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
                "datePublished": "2024-12-14",
                "author": {
                    "@type": "Person",
                    "name": "BiohackingBlog Team"
                }
            },
            {
                "@type": "BlogPosting",
                "headline": "Secrets d'un Sommeil Réparateur",
                "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
                "datePublished": "2024-12-14",
                "author": {
                    "@type": "Person",
                    "name": "BiohackingBlog Team"
                }
            }
        ]
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://biohackingblog.fr/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// Add schema to page
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);
