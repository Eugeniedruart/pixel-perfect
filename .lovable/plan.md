

## Corrections à apporter dans `src/components/WhySection.tsx`

**Problème** : Le fichier n'a pas été mis à jour — il y a toujours deux lignes "2167" (lignes 39 et 40).

**Modifications** :

1. **Supprimer la ligne 40** — le doublon `<p>2167</p>`
2. La flèche SVG est déjà en place après "en" (lignes 34-37) avec une courbe et une pointe de flèche

Le seul changement nécessaire est de retirer la ligne 40 :
```
<p className="text-7xl font-bold font-serif-display italic text-center sm:text-5xl">2167</p>  ← à supprimer
```

C'est une correction d'une seule ligne.

