var config = {
  apiKey: "AIzaSyAqrYN5JnquGHyYC0SGwbmO45L74vujfzA",
  authDomain: "train-scheduler-c1ad3.firebaseapp.com",
  databaseURL: "https://train-scheduler-c1ad3.firebaseio.com",
  projectId: "train-scheduler-c1ad3",
  storageBucket: "train-scheduler-c1ad3.appspot.com",
  messagingSenderId: "28066242726"
};
firebase.initializeApp(config);

var database = firebase.database();
var trainName = '';
var destination = '';
var firstTrainTime = '';
var frequencyMin = '';

$('.btn').on('click', function (event){
  event.preventDefault();

  trainName = $('#trainNameInput').val().trim();
  destination = $('#destinationInput').val().trim();
  firstTrainTime = $('#trainTimeInput').val().trim();
  frequencyMin = $('#frequencyInput').val().trim();

  // console.log('Train Name: ' + trainName);
  // console.log('Destination: ' + destination);
  // console.log('First Train Time: ' + firstTrainTime);
  // console.log('Frequency: ' + frequencyMin);

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequencyMin: frequencyMin
  });

  var timeConverted = moment(firstTrainTime, 'HH:mm').subtract(1, 'years');
  console.log('Time Converted: ' + timeConverted);

  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  var newRow = $('<tr>');
  var newTrainName = $('<td>');
  var newDestination = $('<td>');
  var newFrequency = $('<td>');
  var newArrival = $('<td>');
  var newMinAway = $('<td>');

  newTrainName.text(snapshot.val().trainName)
  newDestination.text(snapshot.val().destination)
  newFrequency.text(snapshot.val().frequencyMin)
  // newArrival.text(snapshot.val().firstTrainTime)
  // newMinAway.text(snapshot.val().)

  $('#tableBody').append(newRow);

  newRow
    .append(newTrainName)
    .append(newDestination)
    .append(newFrequency)
    .append(newArrival)
    .append(newMinAway)
  });
});