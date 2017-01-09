// generated by build-exercises.js
(function(document) {
  'use strict';
  var app = document.querySelector('#app');
  app.config = {
    "PUBLIC_TEST_MODE": false,
    "DISPLAY_SOLUTIONS_AFTER_SUBMIT": true,
    "backend": {
      "type": "realtime-eval"
    },
    "title": "JavaScript Partiel 1",
    "emailSubmission": {
      "teacherEmail": "adrien.joly@eemi.com",
      "emailSubject": "JS PARTIEL 1 DATA"
    },
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
      "_info": "generated from ex.1.quizz.template.md",
      "i": 1,
      "isQuizz": true,
      "title": "QCM",
      "questions": [
        {
          "i": 1,
          "id": "qcm1",
          "md": "```js\nfunction bonjour() {\n  return 'bonjour !';\n}\nvar resultat = bonjour();\n```\n\nQu'est-ce que ce code ne contient PAS:\n",
          "choices": [
            {
              "name": 1,
              "text": "Affectation"
            },
            {
              "name": 2,
              "text": "Définition de fonction"
            },
            {
              "name": 3,
              "text": "Appel de fonction"
            },
            {
              "name": 4,
              "text": "Concaténation"
            }
          ]
        },
        {
          "i": 2,
          "id": "qcm2",
          "md": "```js\nfor (var i = -1; i < 1; i++) {\n  console.log('bonjour');\n}\n```\n\nCombien de fois `'bonjour'` va-t-il être affiché dans la console ?\n",
          "choices": [
            {
              "name": 1,
              "text": "0 fois"
            },
            {
              "name": 2,
              "text": "1 fois"
            },
            {
              "name": 3,
              "text": "2 fois"
            },
            {
              "name": 4,
              "text": "3 fois"
            }
          ]
        },
        {
          "i": 3,
          "id": "qcm3",
          "md": "```js\nif (a === 1) {\n  if (b === 1) {\n    // code sans importance\n  } else {\n    // code sans importance\n  }\n} else {\n  // code sans importance\n}\n```\n\nSi on voulait représenter ces conditions sous forme d'un arbre de décision, combien contiendrait-il de niveaux ?\n",
          "choices": [
            {
              "name": 1,
              "text": "1"
            },
            {
              "name": 2,
              "text": "2"
            },
            {
              "name": 3,
              "text": "3"
            },
            {
              "name": 4,
              "text": "4"
            }
          ]
        },
        {
          "i": 4,
          "id": "qcm4",
          "md": "Supposons que nous ayons un tableau `fruits` ayant la valeur suivante:\n\n```js\n[ 'kiwi', 'prune', 'abricot', 'fraise' ]\n```\n\nQue se passe-t-il si on exécute l'instruction suivante:\n\n```js\nfruits[3] = 'litchi';\n```\n",
          "choices": [
            {
              "name": 1,
              "text": "\"litchi\" va être ajouté à la fin du tableau"
            },
            {
              "name": 2,
              "text": "\"litchi\" va remplacer l'abricot"
            },
            {
              "name": 3,
              "text": "\"litchi\" va remplacer la fraise"
            },
            {
              "name": 4,
              "text": "cette expression vaut false"
            }
          ]
        },
        {
          "i": 5,
          "id": "qcm5",
          "md": "Supposons que nous ayons un tableau `fruits` ayant la valeur suivante:\n\n```js\n[ 'kiwi', 'prune', 'abricot', 'fraise' ]\n```\n\nQue se passe-t-il si on exécute l'instruction suivante:\n\n```js\nfruits.splice(1, 0, 'mûre');\n```\n",
          "choices": [
            {
              "name": 1,
              "text": "un élément \"mûre\" sera inséré entre kiwi et prune"
            },
            {
              "name": 2,
              "text": "un élément \"mûre\" sera inséré juste avant kiwi"
            },
            {
              "name": 3,
              "text": "le deuxième élément (prune) va être remplacé par \"mûre\""
            },
            {
              "name": 4,
              "text": "le tableau restera inchangé"
            }
          ]
        }
      ],
      "solutions": {
        "qcm1": 4,
        "qcm2": 3,
        "qcm3": 2,
        "qcm4": 3,
        "qcm5": 1
      }
    },
    {
      "_info": "generated from ex.2.code.template.md",
      "i": 2,
      "isCode": true,
      "title": "Exercices de codage",
      "questions": [
        {
          "i": 6,
          "id": "code6",
          "variants": [
            {
              "varName": "monNombre",
              "threshold": 4
            },
            {
              "varName": "monNumero",
              "threshold": 4
            },
            {
              "varName": "monNumero",
              "threshold": 6
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var res = [];\n  var console = { log: function(p){\n    res.push(p);\n  } };\n  var tests = [];\n  var monNombre = 4;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 0,\n  ]);\n  monNombre = 7.5;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 1, \n    res[0] === 'plus grand que 4',\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var res = [];\n  var console = { log: function(p){\n    res.push(p);\n  } };\n  var tests = [];\n  var monNumero = 4;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 0,\n  ]);\n  monNumero = 7.5;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 1, \n    res[0] === 'plus grand que 4',\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var res = [];\n  var console = { log: function(p){\n    res.push(p);\n  } };\n  var tests = [];\n  var monNumero = 6;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 0,\n  ]);\n  monNumero = 7.5;\n  _runStudentCode();\n  tests = tests.concat([\n    res.length === 1, \n    res[0] === 'plus grand que 6',\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "## Condition simple\n\nSupposons qu'une variable `monNombre` ait été créée et contienne un nombre.\n\nImplémenter une condition qui affiche `'plus grand que 4'` dans la console, si `monNombre` est strictement supérieur à `4`.\n\n\n",
            "## Condition simple\n\nSupposons qu'une variable `monNumero` ait été créée et contienne un nombre.\n\nImplémenter une condition qui affiche `'plus grand que 4'` dans la console, si `monNumero` est strictement supérieur à `4`.\n\n\n",
            "## Condition simple\n\nSupposons qu'une variable `monNumero` ait été créée et contienne un nombre.\n\nImplémenter une condition qui affiche `'plus grand que 6'` dans la console, si `monNumero` est strictement supérieur à `6`.\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nif (monNombre > 4) {\n  console.log('plus grand que 4');\n}\n```\n",
            "\n\nSolution:\n```js\nif (monNumero > 4) {\n  console.log('plus grand que 4');\n}\n```\n",
            "\n\nSolution:\n```js\nif (monNumero > 6) {\n  console.log('plus grand que 6');\n}\n```\n"
          ]
        },
        {
          "i": 7,
          "id": "code7",
          "variants": [
            {}
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var res;\n  var tests = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var prompt, alert = (p) => res.push(p);\n  // test 1\n  res = [];\n  prompt = () => 'paris';\n  _runStudentCode();\n  tests.push(res.length === 1 && res[0] === 'nuageux');\n  // test 2\n  res = [];\n  prompt = () => 'marseille';\n  _runStudentCode();\n  tests.push(res.length === 1 && res[0] === 'soleil');\n  // test 3\n  res = [];\n  prompt = () => 'brest';\n  _runStudentCode();\n  tests.push(res.length === 1 && res[0] === 'je n\\'ai pas compris');\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "## Condition avancée\n\nNous allons écrire un programme qui donne la météo à l'utilisateur, pour la ville de son choix.\n\nCe programme devra:\n\n - Inviter l'utilisateur à saisir le nom d'une ville;\n - Dans le cas où l'utilisateur a saisi `paris`, répondre `nuageux`;\n - Dans le cas où l'utilisateur a saisi `marseille`, répondre `soleil`;\n - Sinon, répondre `je n'ai pas compris`.\n\nLes réponses sont à afficher à l'aide de la fonction `alert()`. Respecter les textes fournis à la lettre. (y compris la casse, espaces et ponctuation)\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nvar reponse = prompt('saisissez le nom d\\'une ville svp');\nif (reponse === 'paris') {\n  alert('nuageux');\n} else if (reponse === 'marseille') {\n  alert('soleil');\n} else {\n  alert('je n\\'ai pas compris');\n}\n```\n"
          ]
        },
        {
          "i": 8,
          "id": "code8",
          "variants": [
            {}
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  _runStudentCode();\n  var tests = [\n    typeof produit === 'function', \n    produit(1, 3, -2) === -6,\n    produit(4, 100, 0.5) === 200,\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "## Fonctions\n\nDéfinir une fonction `produit` qui retourne le résultat de la multiplication des trois nombres passés en paramètres.\n\nExemple d'appel: `produit(1, 3, -2);` doit retourner `-6` (`1 * 3 * -2`).\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nfunction produit(a, b, c) {\n  return a * b * c;\n}\n```\n"
          ]
        },
        {
          "i": 9,
          "id": "code9",
          "variants": [
            {}
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  _runStudentCode();\n  var tests = [\n    repeterChaine(3, 'bonjour!') === 'bonjour!bonjour!bonjour!',\n    repeterChaine(0, 'bonjour!') === '',\n    repeterChaine(12, 'a') === 'aaaaaaaaaaaa',\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "## Boucles\n\nDéfinir une fonction `repeterChaine` qui prend comme paramètres un nombre `n` et une chaîne de caractères `message`, et retourne une chaîne de caractères contenant `n` fois `message`, en utilisant la concaténation.\n\nExemple d'appel: `repeterChaine(3, 'bonjour!');` doit retourner `'bonjour!bonjour!bonjour!'`.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nfunction repeterChaine(n, message) {\n  var resultat = '';\n  for (var i = 0; i < n; i++) {\n    resultat = resultat + message;\n  }\n  return resultat;\n}\n```\n"
          ]
        },
        {
          "i": 10,
          "id": "code10",
          "variants": [
            {}
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  _runStudentCode();\n  var tests = [\n    typeof tableauContient === 'function',\n    tableauContient([3, 4, 5, 4], 4) === true,\n    tableauContient([3, 4, 5, 4], 2) === false,\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "## Tableaux\n\nDéfinir une fonction `tableauContient` qui prend deux paramètres:\n - `tableau`: un tableau de nombres\n - `nombre`: un nombre\n\n...et retourne:\n - `true` s'il existe au moins un élément ayant la valeur `nombre` dans le tableau `tableau`,\n - ou `false` sinon.\n \nExemples d'appels:\n - `tableauContient([1, 2, 3], 2);` doit retourner `true`.\n - `tableauContient([1, 2, 3], 4);` doit retourner `false`.\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n```js\nfunction tableauContient(tableau, nombre) {\n  var indice = tableau.indexOf(nombre);\n  if (indice === -1) {\n    return false;\n  } else {\n    return true;\n  }\n}\n```\n\n...ou:\n```js\nfunction tableauContient(tableau, nombre) {\n  return tableau.indexOf(nombre) !== -1;\n}\n```\n"
          ]
        }
      ]
    }
  ];
})(document);
