# 🔎 Jour 01 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?

- [ x] J'ai recherché et compris la notion.

**Ma réponse :**

> var et let sont utilisé lorsqun declarer un VARIABLE, const est utilisé lorsqun declarer un CONSTANTE. le diffirent enter var et let est que VAR est un ancienne methode, est un bonne pratique de ne pas utilisé car il ne respecte pas les blocks.

---

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?

- [ x] J'ai recherché et compris la notion.

**Ma réponse :**

> Les Types de donnees sont:
String (Chaine de caracteres)
boolien (true/false)
Nombre (nombre ex: 42 ou 3.14)
Null (variable vide exprès, ddonner par le programmeur )
Undefined (variable cree, mais n'est pas encore donne de valeur, le type Undefined est donne par le PC n'est pas le programmeur)
Symbol ( unique valeur, )
Biglnt (Big Integer, utilise por les plus grand nombres) 

---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?

- [x ] J'ai recherché et compris la notion.

**Ma réponse :**

> l'espression renvoie "object" , est un bug introuduit dant la premier version de JavaScrpit en 1995, est impossible de corriger aujourdui sans casser internet.

---

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

- [ x] J'ai recherché et compris la notion.

**Ma réponse :**

> == est utilise pour verifie uniquement la valeur, et si 2 element ne sont pas le meme type, JS va essayer de les convertir.
ex: "5" == 5 donnera True 

=== est utiliser por verifie la valuer ET le type, aucun conversion est effectuee.
ex: "5" === 5 donnera false

la bonne pratique absolue est utilisé legality strict. L'opérateur == possède des règles de conversion illogiques qu'elles créentdes bugs difficiles à trouver
---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?

- [x ] J'ai recherché et compris la notion.

**Ma réponse :**

> JS va stopper l'execustion et donner : TypeError: Assignment to constant variable

---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> 5 + "5" donnera 55, Ce phénomène s'appelle la coercition de type implicite

---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> le modulo donne le reste d'une divisoon entiere entre 2 nombres.

---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

&& utilise pour comparer si les 
2 valuer et Vrai, si un seul est faux, js donner False.

|| utilise pour comparer si 1 seul valuer est Vrai.

---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

> oui it est possible de utiliser switch a place de if/else, Il faut privilégier le switch dans 2 cas:
Vous testez une seul meme variable
Vous cherchez une correspondace exact

---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.

- [x] J'ai recherché et compris la notion.

**Ma réponse :**

falsy (false) est donner par JS automatiquement.

0 ( nombre zero)
"" (une chaîne de caractères complètement vide)
NaN (not a number)


## ✅ Validation de la recherche

- [x] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
