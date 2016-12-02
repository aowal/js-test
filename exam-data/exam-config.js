module.exports = {

  // General settings
  PUBLIC_TEST_MODE: false, // set to false to restrict acccess and identify students using Google Login
  DISPLAY_SOLUTIONS_AFTER_SUBMIT: false, // set to false, for real exams

  // Back-end config
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCBkfcodGHJEJDsnh99KgpP_F3cxU58P9I",
    databaseURL: "https://js-test-2.firebaseio.com",
    messagingSenderId: "730428017661"
  },

  // Front-end config
  title: 'JavaScript Exam 1',

  // For email submission only
  teacherEmail: 'adrien.joly@eemi.com',
  emailSubject: 'JS EXAM DATA',

  // Authentication
  GOOGLE_CLIENT_ID: '247219641427-9qq25ajpmqvtcmdgrjhadi6o7kpg5sci.apps.googleusercontent.com', // generated from https://console.developers.google.com/apis/credentials?project=eemi-own-exam&authuser=1
  GOOGLE_CLIENT_DOMAIN: 'eemi.com', // to restrict access to users from a certain domain only
  LOGIN_INVITE: 'Se connecter à son compte EEMI:',
};