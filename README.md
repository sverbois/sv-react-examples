Installation
============

```
npm install -g http-server
git clone https://github.com/sverbois/sv-react-examples.git

cd sv-react-exemples/sv-hello-lotto
http-server .

cd sv-react-exemples/sv-react-semantic-ui
npm install
npm start

```

Références
==========

- Tutorial : https://react-tutorial.app
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started

Soirées
=======

Soirée 1
--------

#### Concepts

- element -> component -> properties -> state

#### Exemples

- sv-react-hello-element
- sv-react-hello-component
- sv-react-hello-state
- sv-react-lotto

#### Exercices

Faire un bouton qui affiche le nombre de fois où il a été cliqué.

Soirée 2
--------

## Concepts

- hook state, hook effect

## Exemples

- sv-react-hello-effect
- sv-react-clock

#### Exercices

Un champ reçoit un nombre entier et une zone affiche la table de mutiplication associée à ce nombre.
Faire un wireframe avant avec découpage des zones et association des composants ReactJS.

Soirée 3
--------

## Concepts

- API Rest, Postman

## Exemples

- sv-react-plone-books

#### Exercices

Utiliser "Open Data Wallonie-Bruxelles" (https://www.odwb.be) pour créer une application one page ReactJS.

Soirée 4
-------------

**Concepts**

- node, npm, npx
- Semantic-UI
    + Segment, Container, Grid; 

**Exemples**

- sv-react-semantic-ui

Soirée 5
-------------

**Concepts**

- Leafleft

**Exemples**

- sv-react-leaflet

Soirée 6
-------------

**Concepts**

- context hook

**Exemples**

- sv-react-hello-context


Rappels Javascript
==================

Divers
------

- Affectation par décomposition :
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition
- Fonctions fléchées :
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

Array
-----

- Array.prototype.map() :
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map
- Array.prototype.filter() : 
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
- Array.prototype.forEach() :
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
- Array.prototype.includes() :
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes

Object
------

- Object.keys() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
- Object.values() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/values
- Object.entries() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/entries

Librairies à explorer
=====================

- react.semantic-ui : https://react.semantic-ui.com
- react-leaflet : https://react-leaflet.js.org/
- react-hook-form : https://react-hook-form.com/
- recharts : http://recharts.org
- react-router : https://reacttraining.com/react-router/


Semantic UI React
=================

- Documentation : https://react.semantic-ui.com/
- Installtion : https://react.semantic-ui.com/theming

Installation
------------

```
npx create-react-app@3.3.0 sv-semantic-ui

cd sv-semantic-ui
npm install semantic-ui-react@0.88.2 --save-prod
npm install @craco/craco@5.6.3 --save-dev
npm install @semantic-ui-react/craco-less@1.2.1 --save-dev
npm install semantic-ui-less@2.4.1 --save-dev

nano package.json
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "craco eject"
    },
    
nano craco.config.js
    module.exports = {
      plugins: [{ plugin: require('@semantic-ui-react/craco-less') }],
    }

npx @semantic-ui-react/bootstrap@1.2.2

nano src/semantic-ui/theme.config

    /*******************************
                Folders
    *******************************/
    
    /* Path to theme packages */
    @themesFolder : 'themes';
    
    /* Path to site override folder */
    @siteFolder  : '../../src/semantic-ui/site';
    
    
    /*******************************
             Import Theme
    *******************************/
    
    @import (multiple) "~semantic-ui-less/theme.less";
    @fontPath : '../../../themes/@{theme}/assets/fonts';

nano src/index.js

    import 'semantic-ui-less/semantic.less'
```

Variables
---------

- globals : https://github.com/Semantic-Org/Semantic-UI-LESS/blob/master/themes/default/globals/site.variables
