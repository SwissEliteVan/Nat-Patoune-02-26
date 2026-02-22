markdown
# Nat'Patoune - Service de garde de chats à domicile

Bienvenue sur le dépôt du site web de **Nat'Patoune**, service premium de garde de chats à domicile dans le canton de Vaud (Morges, Ouest lausannois, Lausanne et Échallens).

## Technologies utilisées
- **Three.js** pour les effets 3D en arrière-plan
- **Vite** pour le build et le développement
- **AVIF** pour les images (format moderne haute compression)
- **JavaScript vanilla** pour l'interactivité

## Installation

```bash
npm install
npm run dev
Build pour production
bash
npm run build
Le dossier dist/ contient les fichiers prêts à être déployés sur Hostinger (dans public_html/).

Structure du site
Accueil

Services

Zones & Tarifs

Cadeau

L'Univers (blog)

Contact

Mentions légales & CGV

Contact
Nathalie Piguet : +41 78 768 50 47
Email : miaou@nat-patoune.ch

text

**Fichier 5 : `SECURITY.md`** (à la racine)

```markdown
# Politique de sécurité

## Reporting d'une vulnérabilité

Si vous découvrez une faille de sécurité sur le site Nat'Patoune, merci de nous en informer immédiatement par email à **security@nat-patoune.ch**. Nous traiterons votre rapport dans les plus brefs délais.

## Mesures de sécurité implémentées
- HTTPS forcé via `.htaccess`
- Headers de sécurité (HSTS, X-Frame-Options, X-Content-Type-Options)
- Protection contre les injections SQL et XSS
- Compression Gzip
- Cache long pour les assets statiques
- Images optimisées au format AVIF