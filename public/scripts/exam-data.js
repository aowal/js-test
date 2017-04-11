// generated by build-exercises.js
(function(document) {
  'use strict';
  if(window.location.href.match(/^http\:\/\/(?!localhost|(.*.ngrok.io)).*$/))
    window.location.href = window.location.href.replace('http:', 'https:');
  var app = document.querySelector('#app');
  app.config = {
    "title": "JavaScript - QCM 5",
    "PUBLIC_TEST_MODE": false,
    "DISPLAY_SOLUTIONS_AFTER_SUBMIT": true,
    "redirectToHttps": true,
    "examPack": {
      "publishSolutions": true,
      "publishEvalTests": false
    },
    "backend": {
      "type": "firebase",
      "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCUIGKvdZ4EdFywDU4a90PupcpBEfvpNPc",
        "databaseURL": "https://js-qcm-ft.firebaseio.com",
        "messagingSenderId": "793078387774"
      }
    },
    "teacherEmail": "adrien.joly@eemi.com",
    "GOOGLE_CLIENT_ID": "247219641427-ifeq88p7rgor9al5ksduds7ug0ba7djr.apps.googleusercontent.com",
    "GOOGLE_CLIENT_DOMAIN": "eemi.com",
    "LOGIN_INVITE": "Se connecter à son compte EEMI:",
    "quizzGrading": {
      "ptsRight": 1,
      "ptsWrong": 0,
      "ptsNull": 0
    },
    "codeGrading": {
      "ptsPerExercise": 3
    }
  };
  app.exercises = [
    {
      "_info": "generated from ex.01.code.template.md",
      "i": 1,
      "isCode": true,
      "title": "Exercices de codage",
      "maxScore": 12,
      "questions": [
        {
          "i": 1,
          "id": "code1",
          "variants": [
            {}
          ],
          "mdVariants": [
            "Créez une variable `nombres` de type tableau et contenant les nombres `1`, `2` et `3`.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nvar nombres = [1, 2, 3];\n```\n"
          ]
        },
        {
          "i": 2,
          "id": "code2",
          "variants": [
            {}
          ],
          "mdVariants": [
            "Vous disposez d'une variable `fruits` contenant un tableau de chaînes de caractères.\n\nSaisissez le code JavaScript pour créer une variable `troisieme` et lui affecter la valeur du 3ème élément de ce tableau.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nvar troisieme = fruits[2];\n```\n"
          ]
        },
        {
          "i": 3,
          "id": "code3",
          "variants": [
            {}
          ],
          "mdVariants": [
            "Vous disposez d'une variable `fruits` contenant un tableau de chaînes de caractères.\n\nSaisissez le code JavaScript permettant de retirer le dernier élément de ce tableau, et d'afficher la valeur de cet élément dans la console.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nconsole.log(fruits.pop());\n```\n"
          ]
        },
        {
          "i": 4,
          "id": "code4",
          "variants": [
            {}
          ],
          "mdVariants": [
            "Définir une fonction `tableauContient` qui prend deux paramètres:\n - `tableau`: un tableau de chaînes de caractères\n - `chaine`: une chaîne de caractères\n\n...et retourne:\n - `false` si la valeur `chaine` n'a pas été trouvée dans le tableau `tableau`,\n - ou le premier indice (à partir de 0) auquel a été trouvé la valeur `chaine` dans le tableau `tableau`.\n\nExemples d'appels:\n - `tableauContient(['a', 'b', 'c'], 'b');` doit retourner `1`.\n - `tableauContient(['a', 'b', 'c'], 'd');` doit retourner `false`.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nfunction tableauContient(tableau, chaine) {\n  var indice = tableau.indexOf(chaine);\n  if (indice === -1) {\n    return false;\n  } else {\n    return indice;\n  }\n}\n```\n"
          ]
        }
      ]
    }
  ];
})(document);
