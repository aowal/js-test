// generated by build-exercises.js
(function(document) {
  'use strict';
  if(window.location.href.match(/^http\:\/\/(?!localhost|(.*.ngrok.io)).*$/))
    window.location.href = window.location.href.replace('http:', 'https:');
  var app = document.querySelector('#app');
  app.config = {
    "title": "JavaScript Controle - Classe 4",
    "PUBLIC_TEST_MODE": false,
    "DISPLAY_SOLUTIONS_AFTER_SUBMIT": false,
    "redirectToHttps": true,
    "examPack": {
      "publishSolutions": true,
      "publishEvalTests": true
    },
    "backend": {
      "type": "firebase",
      "FIREBASE_CONFIG": {
        "apiKey": "AIzaSyCMqtRa383qaJ59U3RYbue325iExmESCBY",
        "databaseURL": "https://js-test-ft-41d32.firebaseio.com",
        "messagingSenderId": "859086271487"
      }
    },
    "teacherEmail": "adrien.joly@eemi.com",
    "GOOGLE_CLIENT_ID": "247219641427-i9ojg53vefrp47dhveioe5v4v9namd5m.apps.googleusercontent.com",
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
      "_info": "generated from ex.01.quizz.template.md",
      "i": 1,
      "isQuizz": true,
      "title": "QCM",
      "maxScore": 5,
      "questions": [
        {
          "i": 1,
          "id": "qcm1",
          "md": "```js\nfunction bonjour(prenom) {\n  var resultat = 'bonjour, ' + prenom;\n  return resultat;\n}\n```\n\nQu'est-ce que ce code ne contient PAS:\n",
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
          "md": "```js\nfor (var i = -1; i <= 1; i++) {\n  // code sans importance\n}\n```\n\nCombien de fois le code à l'intérieur des accolades va-t-il être exécuté ?\n",
          "choices": [
            {
              "name": 1,
              "text": "1 fois"
            },
            {
              "name": 2,
              "text": "2 fois"
            },
            {
              "name": 3,
              "text": "3 fois"
            },
            {
              "name": 4,
              "text": "à l'infini"
            }
          ]
        },
        {
          "i": 3,
          "id": "qcm3",
          "md": "```js\nif (a === 1) {\n  // code sans importance\n} else if (b === 1) {\n  // code sans importance\n} else {\n  // code sans importance\n}\n```\n\nSi on voulait représenter ces conditions sous forme d'un arbre de décision, combien contiendrait-il de niveaux ?\n",
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
          "md": "Supposons que nous ayons un tableau `fruits` ayant la valeur suivante:\n\n```js\n[ 'kiwi', 'prune', 'abricot', 'fraise' ]\n```\n\nQue se passe-t-il si on exécute l'instruction suivante:\n\n```js\nfruits[1] = 'litchi';\n```\n",
          "choices": [
            {
              "name": 1,
              "text": "la valeur \"litchi\" va être ajoutée au début du tableau"
            },
            {
              "name": 2,
              "text": "la valeur \"litchi\" va remplacer \"prune\""
            },
            {
              "name": 3,
              "text": "la valeur \"litchi\" va remplacer \"kiwi\""
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
          "md": "Supposons que nous ayons un tableau `fruits` ayant la valeur suivante:\n\n```js\n[ 'kiwi', 'prune', 'abricot', 'fraise' ]\n```\n\nQue se passe-t-il si on exécute l'instruction suivante:\n\n```js\nfruits.splice(1, 2);\n```\n",
          "choices": [
            {
              "name": 1,
              "text": "le nombre 2 sera inséré juste après \"kiwi\""
            },
            {
              "name": 2,
              "text": "la valeur \"prune\" va être retirée du tableau"
            },
            {
              "name": 3,
              "text": "les valeurs \"prune\" et \"abricot\" vont être retirées du tableau"
            },
            {
              "name": 4,
              "text": "les valeurs \"prune\", \"abricot\" et \"fraise\" vont être retirées du tableau"
            }
          ]
        }
      ],
      "solutions": {
        "qcm1": 3,
        "qcm2": 3,
        "qcm3": 1,
        "qcm4": 2,
        "qcm5": 3
      }
    },
    {
      "_info": "generated from ex.02.code.template.md",
      "i": 2,
      "isCode": true,
      "title": "Exercices de codage",
      "maxScore": 15,
      "questions": [
        {
          "i": 6,
          "id": "code6",
          "variants": [
            {
              "varName": "prenom",
              "value": "patrice"
            },
            {
              "varName": "prenom",
              "value": "michel"
            },
            {
              "varName": "nom",
              "value": "durand"
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  function alert(p) {\n    _res.push(p);\n  }\n  var prenom;\n  var tests = [];\n  var error = null;\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n    error = e;\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  tests = tests.concat([\n    !error && _res.length === 0\n      ? res(1, 'le code fonctionne sans erreur')\n      : res(0, 'une erreur ou un alert() inattendu est survenu'),\n  ]);\n  prenom = 'patrice';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests = tests.concat([\n    _res.length === 1\n      ? res(1, 'quand prenom vaut patrice, l\\'alert est bien affiché')\n      : res(0, 'quand prenom vaut patrice, un alert devrait être affiché'),\n    _res[0] === 'prenom vaut patrice'\n      ? res(1, 'l\\'alert contient le message demandé')\n      : res(0, 'l\\'alert ne contient pas le message demandé'),\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  function alert(p) {\n    _res.push(p);\n  }\n  var prenom;\n  var tests = [];\n  var error = null;\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n    error = e;\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  tests = tests.concat([\n    !error && _res.length === 0\n      ? res(1, 'le code fonctionne sans erreur')\n      : res(0, 'une erreur ou un alert() inattendu est survenu'),\n  ]);\n  prenom = 'michel';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests = tests.concat([\n    _res.length === 1\n      ? res(1, 'quand prenom vaut michel, l\\'alert est bien affiché')\n      : res(0, 'quand prenom vaut michel, un alert devrait être affiché'),\n    _res[0] === 'prenom vaut michel'\n      ? res(1, 'l\\'alert contient le message demandé')\n      : res(0, 'l\\'alert ne contient pas le message demandé'),\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  function alert(p) {\n    _res.push(p);\n  }\n  var nom;\n  var tests = [];\n  var error = null;\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n    error = e;\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  tests = tests.concat([\n    !error && _res.length === 0\n      ? res(1, 'le code fonctionne sans erreur')\n      : res(0, 'une erreur ou un alert() inattendu est survenu'),\n  ]);\n  nom = 'durand';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests = tests.concat([\n    _res.length === 1\n      ? res(1, 'quand nom vaut durand, l\\'alert est bien affiché')\n      : res(0, 'quand nom vaut durand, un alert devrait être affiché'),\n    _res[0] === 'nom vaut durand'\n      ? res(1, 'l\\'alert contient le message demandé')\n      : res(0, 'l\\'alert ne contient pas le message demandé'),\n  ]);\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "<!-- Condition simple -->\n\nSupposons qu'une variable `prenom` ait été créée et contienne une chaine de caractères.\n\nImplémenter une condition qui affiche `'prenom vaut patrice'` à l'aide de `alert()`, si (et seulement si) `prenom` est strictement égal à `patrice`.\n\n\n",
            "<!-- Condition simple -->\n\nSupposons qu'une variable `prenom` ait été créée et contienne une chaine de caractères.\n\nImplémenter une condition qui affiche `'prenom vaut michel'` à l'aide de `alert()`, si (et seulement si) `prenom` est strictement égal à `michel`.\n\n\n",
            "<!-- Condition simple -->\n\nSupposons qu'une variable `nom` ait été créée et contienne une chaine de caractères.\n\nImplémenter une condition qui affiche `'nom vaut durand'` à l'aide de `alert()`, si (et seulement si) `nom` est strictement égal à `durand`.\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\nif (prenom === 'patrice') {\n  alert('prenom vaut patrice');\n}\n```\n",
            "\n\nSolution:\n\n```js\nif (prenom === 'michel') {\n  alert('prenom vaut michel');\n}\n```\n",
            "\n\nSolution:\n\n```js\nif (nom === 'durand') {\n  alert('nom vaut durand');\n}\n```\n"
          ]
        },
        {
          "i": 7,
          "id": "code7",
          "variants": [
            {
              "city1": "agen",
              "dist1": "590km",
              "city2": "marseille",
              "dist2": "750km"
            },
            {
              "city1": "le mans",
              "dist1": "200km",
              "city2": "angers",
              "dist2": "300km"
            },
            {
              "city1": "marseille",
              "dist1": "750km",
              "city2": "bordeaux",
              "dist2": "550km"
            },
            {
              "city1": "roubaix",
              "dist1": "230km",
              "city2": "lyon",
              "dist2": "450km"
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res;\n  var tests = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var prompt, alert = (p) => _res.push(p);\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  // test 1\n  _res = [];\n  prompt = () => 'agen';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '590km'\n    ? res(1, 'quand on tape agen, la réponse est bien 590km')\n    : res(0, 'quand on tape agen, la réponse devrait être 590km')\n  );\n  // test 2\n  _res = [];\n  prompt = () => 'marseille';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '750km'\n    ? res(1, 'quand on tape marseille, la réponse est bien 750km')\n    : res(0, 'quand on tape marseille, la réponse devrait être 750km')\n  );\n  // test 3\n  _res = [];\n  prompt = () => 'brest';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === \"mauvaise saisie\"\n    ? res(1, 'quand on tape brest, la réponse est bien \"mauvaise saisie\"')\n    : res(0, 'quand on tape brest, la réponse devrait être \"mauvaise saisie\"')\n  );\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res;\n  var tests = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var prompt, alert = (p) => _res.push(p);\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  // test 1\n  _res = [];\n  prompt = () => 'le mans';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '200km'\n    ? res(1, 'quand on tape le mans, la réponse est bien 200km')\n    : res(0, 'quand on tape le mans, la réponse devrait être 200km')\n  );\n  // test 2\n  _res = [];\n  prompt = () => 'angers';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '300km'\n    ? res(1, 'quand on tape angers, la réponse est bien 300km')\n    : res(0, 'quand on tape angers, la réponse devrait être 300km')\n  );\n  // test 3\n  _res = [];\n  prompt = () => 'brest';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === \"mauvaise saisie\"\n    ? res(1, 'quand on tape brest, la réponse est bien \"mauvaise saisie\"')\n    : res(0, 'quand on tape brest, la réponse devrait être \"mauvaise saisie\"')\n  );\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res;\n  var tests = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var prompt, alert = (p) => _res.push(p);\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  // test 1\n  _res = [];\n  prompt = () => 'marseille';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '750km'\n    ? res(1, 'quand on tape marseille, la réponse est bien 750km')\n    : res(0, 'quand on tape marseille, la réponse devrait être 750km')\n  );\n  // test 2\n  _res = [];\n  prompt = () => 'bordeaux';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '550km'\n    ? res(1, 'quand on tape bordeaux, la réponse est bien 550km')\n    : res(0, 'quand on tape bordeaux, la réponse devrait être 550km')\n  );\n  // test 3\n  _res = [];\n  prompt = () => 'brest';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === \"mauvaise saisie\"\n    ? res(1, 'quand on tape brest, la réponse est bien \"mauvaise saisie\"')\n    : res(0, 'quand on tape brest, la réponse devrait être \"mauvaise saisie\"')\n  );\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _res;\n  var tests = [];\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var prompt, alert = (p) => _res.push(p);\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  // test 1\n  _res = [];\n  prompt = () => 'roubaix';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '230km'\n    ? res(1, 'quand on tape roubaix, la réponse est bien 230km')\n    : res(0, 'quand on tape roubaix, la réponse devrait être 230km')\n  );\n  // test 2\n  _res = [];\n  prompt = () => 'lyon';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === '450km'\n    ? res(1, 'quand on tape lyon, la réponse est bien 450km')\n    : res(0, 'quand on tape lyon, la réponse devrait être 450km')\n  );\n  // test 3\n  _res = [];\n  prompt = () => 'brest';\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  tests.push(_res.length === 1 && _res[0] === \"mauvaise saisie\"\n    ? res(1, 'quand on tape brest, la réponse est bien \"mauvaise saisie\"')\n    : res(0, 'quand on tape brest, la réponse devrait être \"mauvaise saisie\"')\n  );\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "<!-- Condition avancée -->\n\nNous allons écrire un programme qui donne la distance de certaines villes, au départ de Paris.\n\nCe programme devra:\n\n - Inviter l'utilisateur à saisir le nom d'une ville;\n - Dans le cas où l'utilisateur a saisi `agen`, répondre `590km`;\n - Dans le cas où l'utilisateur a saisi `marseille`, répondre `750km`;\n - Sinon, répondre `mauvaise saisie`.\n\nLes réponses sont à afficher à l'aide de la fonction `alert()`. Respecter les textes fournis à la lettre. (y compris la casse, espaces et ponctuation)\n\n\n",
            "<!-- Condition avancée -->\n\nNous allons écrire un programme qui donne la distance de certaines villes, au départ de Paris.\n\nCe programme devra:\n\n - Inviter l'utilisateur à saisir le nom d'une ville;\n - Dans le cas où l'utilisateur a saisi `le mans`, répondre `200km`;\n - Dans le cas où l'utilisateur a saisi `angers`, répondre `300km`;\n - Sinon, répondre `mauvaise saisie`.\n\nLes réponses sont à afficher à l'aide de la fonction `alert()`. Respecter les textes fournis à la lettre. (y compris la casse, espaces et ponctuation)\n\n\n",
            "<!-- Condition avancée -->\n\nNous allons écrire un programme qui donne la distance de certaines villes, au départ de Paris.\n\nCe programme devra:\n\n - Inviter l'utilisateur à saisir le nom d'une ville;\n - Dans le cas où l'utilisateur a saisi `marseille`, répondre `750km`;\n - Dans le cas où l'utilisateur a saisi `bordeaux`, répondre `550km`;\n - Sinon, répondre `mauvaise saisie`.\n\nLes réponses sont à afficher à l'aide de la fonction `alert()`. Respecter les textes fournis à la lettre. (y compris la casse, espaces et ponctuation)\n\n\n",
            "<!-- Condition avancée -->\n\nNous allons écrire un programme qui donne la distance de certaines villes, au départ de Paris.\n\nCe programme devra:\n\n - Inviter l'utilisateur à saisir le nom d'une ville;\n - Dans le cas où l'utilisateur a saisi `roubaix`, répondre `230km`;\n - Dans le cas où l'utilisateur a saisi `lyon`, répondre `450km`;\n - Sinon, répondre `mauvaise saisie`.\n\nLes réponses sont à afficher à l'aide de la fonction `alert()`. Respecter les textes fournis à la lettre. (y compris la casse, espaces et ponctuation)\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\nvar reponse = prompt('saisissez le nom d\\'une ville svp');\nif (reponse === 'agen') {\n  alert('590km');\n} else if (reponse === 'marseille') {\n  alert('750km');\n} else {\n  alert('mauvaise saisie');\n}\n```\n",
            "\n\nSolution:\n\n```js\nvar reponse = prompt('saisissez le nom d\\'une ville svp');\nif (reponse === 'le mans') {\n  alert('200km');\n} else if (reponse === 'angers') {\n  alert('300km');\n} else {\n  alert('mauvaise saisie');\n}\n```\n",
            "\n\nSolution:\n\n```js\nvar reponse = prompt('saisissez le nom d\\'une ville svp');\nif (reponse === 'marseille') {\n  alert('750km');\n} else if (reponse === 'bordeaux') {\n  alert('550km');\n} else {\n  alert('mauvaise saisie');\n}\n```\n",
            "\n\nSolution:\n\n```js\nvar reponse = prompt('saisissez le nom d\\'une ville svp');\nif (reponse === 'roubaix') {\n  alert('230km');\n} else if (reponse === 'lyon') {\n  alert('450km');\n} else {\n  alert('mauvaise saisie');\n}\n```\n"
          ]
        },
        {
          "i": 8,
          "id": "code8",
          "variants": [
            {
              "fctName": "division"
            },
            {
              "fctName": "diviser"
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var _scope = {}; // store the function name in the global scope \n  try {\n    eval(`_studentCode`.replace(/function ([^ \\(]+)/g, '_scope.$1 = function'));\n    /* will associate the student's function to the global var above */\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var studentFct = _scope[`division`];\n  var tests = [\n    `_studentCode`.replace(/[ \\t]/g, '').indexOf('functiondivision(') !== -1\n      ? res(1, 'function division a bien été trouvé dans le code')\n      : res(0, 'la fonction division() n\\'est pas définie correctement'),\n    typeof studentFct === 'function' && studentFct(6, -2) === -3\n      ? res(1, 'l\\'appel division(6, -2) retourne bien -3')\n      : res(0, 'l\\'appel division(6, -2) devrait retourner -3'),\n    typeof studentFct === 'function' && studentFct(2, 0.5) === 4\n      ? res(1, 'l\\'appel division(2, 0.5) retourne bien 4')\n      : res(0, 'l\\'appel division(2, 0.5) devrait retourner 4'),\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var _scope = {}; // store the function name in the global scope \n  try {\n    eval(`_studentCode`.replace(/function ([^ \\(]+)/g, '_scope.$1 = function'));\n    /* will associate the student's function to the global var above */\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var studentFct = _scope[`diviser`];\n  var tests = [\n    `_studentCode`.replace(/[ \\t]/g, '').indexOf('functiondiviser(') !== -1\n      ? res(1, 'function diviser a bien été trouvé dans le code')\n      : res(0, 'la fonction diviser() n\\'est pas définie correctement'),\n    typeof studentFct === 'function' && studentFct(6, -2) === -3\n      ? res(1, 'l\\'appel diviser(6, -2) retourne bien -3')\n      : res(0, 'l\\'appel diviser(6, -2) devrait retourner -3'),\n    typeof studentFct === 'function' && studentFct(2, 0.5) === 4\n      ? res(1, 'l\\'appel diviser(2, 0.5) retourne bien 4')\n      : res(0, 'l\\'appel diviser(2, 0.5) devrait retourner 4'),\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "<!-- Fonctions -->\n\nDéfinir une fonction `division` qui retourne le résultat de la division des deux nombres passés en paramètres.\n\nExemple d'appel: `division(6, -2);` doit retourner `-3` (résultat de `6 / -2`).\n\n\n",
            "<!-- Fonctions -->\n\nDéfinir une fonction `diviser` qui retourne le résultat de la division des deux nombres passés en paramètres.\n\nExemple d'appel: `diviser(6, -2);` doit retourner `-3` (résultat de `6 / -2`).\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\nfunction division(a, b) {\n  return a / b;\n}\n```\n",
            "\n\nSolution:\n\n```js\nfunction diviser(a, b) {\n  return a / b;\n}\n```\n"
          ]
        },
        {
          "i": 9,
          "id": "code9",
          "variants": [
            {
              "n1": 10,
              "n2": 20
            },
            {
              "n1": 50,
              "n2": 60
            },
            {
              "n1": -5,
              "n2": 5
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _logged = [];\n  var _expected = [];\n  for (var i = 10; i <= 20; i++) { _expected.push(i) }\n  var console = { log: function(i){ _logged.push(i); } }; // tolerate console.log() calls\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var tests = [\n    `_studentCode`.split('for').length === 2 // just 1 for-loop\n      ? res(1, 'il y a bien une boucle for dans le code')\n      : res(0, 'il devrait y avoir une boucle for dans le code'),\n    `_studentCode`.split('console.log').length === 2 // just 1 console.log call\n      ? res(1, 'il y a bien un console.log for dans le code')\n      : res(0, 'il devrait y avoir un console.log for dans le code'),\n    _logged.length\n      ? res(1, 'console.log a bien été appelé')\n      : res(0, 'console.log aurait du être appelé'),\n    _logged[0] === _expected[0]\n      ? res(1, 'le 1er console.log affiche bien ' + _expected[0])\n      : res(0, 'le 1er console.log devrait afficher ' + _expected[0]),\n    _logged[4] === _expected[4]\n      ? res(1, 'le 5ème console.log affiche bien ' + _expected[4])\n      : res(0, 'le 5ème console.log devrait afficher ' + _expected[4]),\n    _logged[9] === _expected[9]\n      ? res(1, 'le 10ème console.log affiche bien ' + _expected[9])\n      : res(0, 'le 10ème console.log devrait afficher ' + _expected[9]),\n  ];\n  application.remote._send(null, tests);\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _logged = [];\n  var _expected = [];\n  for (var i = 50; i <= 60; i++) { _expected.push(i) }\n  var console = { log: function(i){ _logged.push(i); } }; // tolerate console.log() calls\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var tests = [\n    `_studentCode`.split('for').length === 2 // just 1 for-loop\n      ? res(1, 'il y a bien une boucle for dans le code')\n      : res(0, 'il devrait y avoir une boucle for dans le code'),\n    `_studentCode`.split('console.log').length === 2 // just 1 console.log call\n      ? res(1, 'il y a bien un console.log for dans le code')\n      : res(0, 'il devrait y avoir un console.log for dans le code'),\n    _logged.length\n      ? res(1, 'console.log a bien été appelé')\n      : res(0, 'console.log aurait du être appelé'),\n    _logged[0] === _expected[0]\n      ? res(1, 'le 1er console.log affiche bien ' + _expected[0])\n      : res(0, 'le 1er console.log devrait afficher ' + _expected[0]),\n    _logged[4] === _expected[4]\n      ? res(1, 'le 5ème console.log affiche bien ' + _expected[4])\n      : res(0, 'le 5ème console.log devrait afficher ' + _expected[4]),\n    _logged[9] === _expected[9]\n      ? res(1, 'le 10ème console.log affiche bien ' + _expected[9])\n      : res(0, 'le 10ème console.log devrait afficher ' + _expected[9]),\n  ];\n  application.remote._send(null, tests);\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var _logged = [];\n  var _expected = [];\n  for (var i = -5; i <= 5; i++) { _expected.push(i) }\n  var console = { log: function(i){ _logged.push(i); } }; // tolerate console.log() calls\n  try {\n    eval(`_studentCode`); // catch syntax errors, if any\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var tests = [\n    `_studentCode`.split('for').length === 2 // just 1 for-loop\n      ? res(1, 'il y a bien une boucle for dans le code')\n      : res(0, 'il devrait y avoir une boucle for dans le code'),\n    `_studentCode`.split('console.log').length === 2 // just 1 console.log call\n      ? res(1, 'il y a bien un console.log for dans le code')\n      : res(0, 'il devrait y avoir un console.log for dans le code'),\n    _logged.length\n      ? res(1, 'console.log a bien été appelé')\n      : res(0, 'console.log aurait du être appelé'),\n    _logged[0] === _expected[0]\n      ? res(1, 'le 1er console.log affiche bien ' + _expected[0])\n      : res(0, 'le 1er console.log devrait afficher ' + _expected[0]),\n    _logged[4] === _expected[4]\n      ? res(1, 'le 5ème console.log affiche bien ' + _expected[4])\n      : res(0, 'le 5ème console.log devrait afficher ' + _expected[4]),\n    _logged[9] === _expected[9]\n      ? res(1, 'le 10ème console.log affiche bien ' + _expected[9])\n      : res(0, 'le 10ème console.log devrait afficher ' + _expected[9]),\n  ];\n  application.remote._send(null, tests);\n})();\n"
          ],
          "mdVariants": [
            "<!-- Boucles -->\n\nImplémenter une boucle `for()` qui écrit les nombres de `10` à `20` (compris) dans la console, à raison d'une ligne par nombre. Utiliser `console.log()`.\n\n\n",
            "<!-- Boucles -->\n\nImplémenter une boucle `for()` qui écrit les nombres de `50` à `60` (compris) dans la console, à raison d'une ligne par nombre. Utiliser `console.log()`.\n\n\n",
            "<!-- Boucles -->\n\nImplémenter une boucle `for()` qui écrit les nombres de `-5` à `5` (compris) dans la console, à raison d'une ligne par nombre. Utiliser `console.log()`.\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\nfor (var i = 10; i <= 20; i++) {\n  console.log(i);\n}\n```\n",
            "\n\nSolution:\n\n```js\nfor (var i = 50; i <= 60; i++) {\n  console.log(i);\n}\n```\n",
            "\n\nSolution:\n\n```js\nfor (var i = -5; i <= 5; i++) {\n  console.log(i);\n}\n```\n"
          ]
        },
        {
          "i": 10,
          "id": "code10",
          "variants": [
            {
              "val": 1
            },
            {
              "val": 3
            }
          ],
          "testVariants": [
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var _scope = {}; // store the function name in the global scope \n  try {\n    eval(`_studentCode`.replace(/function ([^ \\(]+)/g, '_scope.$1 = function'));\n    /* will associate the student's function to the global var above */\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var studentFct = _scope[`contient1`];\n  var tests = [\n    `_studentCode`.replace(/[ \\t]/g, '').indexOf('functioncontient1(') !== -1\n      ? res(1, 'function contient1 a bien été trouvé dans le code')\n      : res(0, 'la fonction contient1() n\\'est pas définie correctement'),\n    typeof studentFct === 'function' && studentFct([40, 1, 5, 1]) === true\n      ? res(1, 'l\\'appel contient1([40, 1, 5, 1]) retourne bien true')\n      : res(0, 'l\\'appel contient1([40, 1, 5, 1]) devrait retourner true'),\n    typeof studentFct === 'function' && studentFct([40, 4, 5, 4]) === false\n      ? res(1, 'l\\'appel contient1([40, 4, 5, 4]) retourne bien false')\n      : res(0, 'l\\'appel contient1([40, 4, 5, 4]) devrait retourner false'),\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n",
            "\n// automatic student evaluation code\n(function evaluateStudentCode(){\n  var console = { log: function(){} }; // tolerate console.log() calls\n  var _scope = {}; // store the function name in the global scope \n  try {\n    eval(`_studentCode`.replace(/function ([^ \\(]+)/g, '_scope.$1 = function'));\n    /* will associate the student's function to the global var above */\n  } catch (e) {\n    application.remote._log('/!\\\\ erreur: ' + e.message);\n  }\n  function res(pts, msg) {\n    application.remote._log((pts ? '[+] ' : '[-] ') + msg);\n    return pts;\n  }\n  var studentFct = _scope[`contient3`];\n  var tests = [\n    `_studentCode`.replace(/[ \\t]/g, '').indexOf('functioncontient3(') !== -1\n      ? res(1, 'function contient3 a bien été trouvé dans le code')\n      : res(0, 'la fonction contient3() n\\'est pas définie correctement'),\n    typeof studentFct === 'function' && studentFct([40, 3, 5, 3]) === true\n      ? res(1, 'l\\'appel contient3([40, 3, 5, 3]) retourne bien true')\n      : res(0, 'l\\'appel contient3([40, 3, 5, 3]) devrait retourner true'),\n    typeof studentFct === 'function' && studentFct([40, 4, 5, 4]) === false\n      ? res(1, 'l\\'appel contient3([40, 4, 5, 4]) retourne bien false')\n      : res(0, 'l\\'appel contient3([40, 4, 5, 4]) devrait retourner false'),\n  ];\n  application.remote._send(null, tests); // 1 point per passing test => 3 pts per exercise\n})();\n"
          ],
          "mdVariants": [
            "<!-- Tableaux -->\n\nDéfinir une fonction `contient1` qui prend en paramètre un tableau de nombres, et retourne:\n - `true` si la valeur `1` est contenue au moins une fois dans le tableau passé en paramètre,\n - ou `false` sinon.\n \nExemples d'appels:\n - `contient1([1, 2, 3]);` doit retourner `true`.\n - `contient1([4, 5, 6]);` doit retourner `false`.\n\n\n",
            "<!-- Tableaux -->\n\nDéfinir une fonction `contient3` qui prend en paramètre un tableau de nombres, et retourne:\n - `true` si la valeur `3` est contenue au moins une fois dans le tableau passé en paramètre,\n - ou `false` sinon.\n \nExemples d'appels:\n - `contient3([1, 2, 3]);` doit retourner `true`.\n - `contient3([4, 5, 6]);` doit retourner `false`.\n\n\n"
          ],
          "mdSolutions": [
            "\n\nSolution:\n\n```js\nfunction contient1(tableau) {\n  var indice = tableau.indexOf(1);\n  if (indice === -1) {\n    return false;\n  } else {\n    return true;\n  }\n}\n```\n\n...ou:\n\n```js\nfunction contient1(tableau) {\n  return tableau.indexOf(1) !== -1;\n}\n```\n",
            "\n\nSolution:\n\n```js\nfunction contient3(tableau) {\n  var indice = tableau.indexOf(3);\n  if (indice === -1) {\n    return false;\n  } else {\n    return true;\n  }\n}\n```\n\n...ou:\n\n```js\nfunction contient3(tableau) {\n  return tableau.indexOf(3) !== -1;\n}\n```\n"
          ]
        }
      ]
    }
  ];
})(document);
