# Examen Sûreté et Sécurité 20/03/2025

## Partie 1 Challenge 1

Lancer le chall1 grâce à `docker` (utiliser `Compose` par exemple).

Le challenge présente une application qui permet de créer des notes et de lire ses propres notes.
Un utilisateur `admin` dispose d'une note contenant un flag, le but est de récupérer ce flag.
Vous avez accès au code source de l'application, ce qui va permettre de vous guider.

Les questions suivantes vont permettre de vous guider dans votre recherche.
Il vous faudra présenter vos réponses dans un document tel que celui-ci (format Markdown ou autre format texte).

### 1.1 Quel est le langage de programmation utilisé pour développer l'application ? Avec quel interpréteur ?

### 1.2 Quelle technologie est utilisée afin de développer l'application Web (framework) ?

### 1.3 Que contient le dossier `views` ? Y voyez-vous quelque chose de suspect ?

### 1.4 Dans quel fichier est défini l'accès à la base de données ?

### 1.5 Quelle(s) technologie(s) est (sont) utilisée(s) pour accéder à la base de données ?

### 1.6 Hormis les requêtes d'initialisation définies dans le fichier 1.4, où se trouvent les requêtes faites à la base de donées ?

### 1.7 Combien comptez-vous de requêtes ? Y a-t-il une ou plusieurs requêtes qui vous semblent suspectes ? Laquelle (Lesquelles) ?

### 1.8 Quel type d'attaque est possible sur cette application ? Dans quel(s) fichier(s) et sur quelle(s) ligne(s) se trouve le code vulnérable ?

### 1.9 Expliquez avec vos propres mots en quoi consiste ce type d'attaque.

### 1.10 Quelle différence principale voyez-vous avec les attaques similaires vues dans le cours ?

### 1.11 Comment peut-on exploiter cette vulnérabilité ? (Vous pouvez vérifier que vous avez bien obtenu le bon flag via la page `Valider le challenge` du site).

### 1.12 Comment peut-on corriger le code afin qu'il ne soit plus vulnérable à cette attaque ? Fournir une version patchée du ou des fichiers concerné(s) patché(s).

## Partie 2 Challenge 2

Lancer le chall2 de la même façon que le chall1.

Ce challenge présente une application assez similaire à celle du chall1 dans ses fonctionnalités, et est une version 
modifiée d'un site d'exemple dans un tutoriel disponible publiquement.

Le but est de trouver le flag qui permet de valider le challenge sur la page de validation.

### 2.1 Quel est le langage de programmation utilisé pour développer l'application ?

### 2.2 Quel framework web est utilisé pour faire l'application web ?

### 2.3 Que contient le dossier `templates` ?

### 2.4 Dans quel fichier pouvez-vous voir le schéma de la base de données ?

### 2.5 Dans quel fichier et sur quelle ligne le flag est-il créé ?

### 2.6 D'après les informations précédentes, où se trouve le flag dans l'application ?

### 2.7 Quelle(s) URLs permettent de visualiser le flag ?

### 2.8 Pour chacune des URLs précédentes, indiquer ce qui vous empêche de visualiser le flag

### 2.9 Quelles solutions pourraient permettre de contourner ces limites ?

### 2.10 Quelles fonctionnalités de l'application pourraient permettre de mettre en oeuvre ces solutions ?

### 2.11 Parmi ces fonctionnalités, laquelle présente une vulnérabilité ? Dans quelle catégorie de l'OWASP cette vulnérabilité peut-elle être rangée ?

### 2.12 Comment exploiter la vulnérabilité identifiée au 2.11 ?

### 2.13 Comment faire pour corriger la vulnérabilité ? Fournir une version patchée du ou des fichiers incriminés.

