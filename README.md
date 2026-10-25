# Portfolio d’Ahmed

Portfolio personnel en français, responsive et prêt à personnaliser. Le site reprend l’ambiance sombre de la capture de référence avec une direction graphique plus sobre : typographie éditoriale, détails verts discrets, navigation animée au survol et éléments de code.

## Lancer le site

1. Décompressez le fichier ZIP.
2. Ouvrez le dossier `portfolio` dans VS Code.
3. Démarrez un serveur local depuis ce dossier avec l’une de ces options :

   **Python**

   ```powershell
   py -m http.server 8000
   ```

   **PHP**

   ```powershell
   php -S localhost:8000
   ```

4. Ouvrez `http://localhost:8000` dans votre navigateur.

Vous pouvez aussi ouvrir `index.html` directement. Le serveur local est recommandé pour éviter certaines restrictions du navigateur.

## Personnaliser

- Modifiez les textes et les projets dans `index.html`.
- Remplacez `ahmed@example.com` par votre adresse e-mail.
- Remplacez `CV.pdf` par votre CV à jour, en gardant le même nom de fichier.
- Le bouton **Modifier le contenu** permet de modifier les textes directement dans la page. Les changements sont enregistrés dans le stockage local de ce navigateur uniquement ; pour les intégrer au site partagé, modifiez ensuite `index.html`.
- Bootstrap et les polices sont chargés en ligne : une connexion Internet est nécessaire pour les afficher.

## Fichiers

- `index.html` — contenu et sections du portfolio
- `style.css` — mise en page, couleurs, responsive design et animations
- `script.js` — menu, navigation active et mode édition local
- `CV.pdf` — CV fourni avec le projet

Les cartes de projets et les niveaux de compétence sont des exemples à adapter à votre parcours réel.

## Projet ajouté : Nova Market

Le portfolio présente maintenant une boutique e-commerce responsive. Après extraction de l'archive du portfolio, cliquez sur « Voir le site » dans la carte Nova Market pour ouvrir le projet. « Télécharger le code » récupère le ZIP autonome du projet.

Le dossier `nova-market/` contient aussi les fichiers du site et son propre README. Pour le lancer depuis ce dossier, démarrez `py -m http.server 8000`, puis ouvrez `http://localhost:8000`.
