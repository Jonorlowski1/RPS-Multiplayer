// Initialize Firebase
var config = {
  apiKey: "AIzaSyBiVE-aIceJNuI2nOZ6cXwKINfMTkhON7k",
  authDomain: "rps-multiplayer-6cf91.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-6cf91.firebaseio.com",
  projectId: "rps-multiplayer-6cf91",
  storageBucket: "rps-multiplayer-6cf91.appspot.com",
  messagingSenderId: "139536469564"
};
firebase.initializeApp(config);

var database = firebase.database();

var username = '';
var playerOneChoice = '';
var playerTwoChoice = '';

// USERNAME submission
$('#submit').on('click', function(event) {
  event.preventDefault();
  username = $('#username').val().trim();
  console.log(username);
  
  database.ref().set({
    username: username
  });
});

$('.btn-choice').on('click', function () {
  // event.preventDefault();
  // $(this).val()

  // username = $('#username').val().trim();
  playerOneChoice = $(this).val();
  playerTwoChoice = $(this).val();
  
  database.ref().set({
    playerOneChoice: playerOneChoice,
    playerTwoChoice: playerTwoChoice
    // dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});