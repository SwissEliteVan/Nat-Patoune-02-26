document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('quick-contact');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Ici vous pouvez envoyer les données à un script PHP ou un service comme Formspree
        console.log('Formulaire soumis:', data);
        
        // Exemple d'envoi avec fetch (à adapter selon votre backend)
        try {
            const response = await fetch('/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Message envoyé avec succès !');
                contactForm.reset();
            } else {
                alert('Erreur lors de l\'envoi. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur réseau. Veuillez réessayer plus tard.');
        }
    });
});