export function generateMetaTags(title, description, image, url) {
    return {
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:url', content: url },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image }
        ]
    };
}

export function generateStructuredData(type, data) {
    // Génère des données structurées JSON-LD
    const base = {
        "@context": "https://schema.org",
        "@type": type
    };
    return { ...base, ...data };
}