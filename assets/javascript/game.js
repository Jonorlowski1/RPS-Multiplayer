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
  firstTrainTime = moment(
    $("#trainTimeInput")
      .val()
      .trim(),
    "HH:mm"
  )
    .subtract(1, "years")
    .format("X");  
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
});

  
  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    
    var newRow = $('<tr>');
    var newTrainName = $('<td>');
    var newDestination = $('<td>');
    var newFrequencyTd = $('<td>');
    var newArrivalTd = $('<td>');
    var newMinAway = $('<td>');
    
    console.log('Time Converted: ' + firstTrainTime);

    var newFrequency = snapshot.val().frequencyMin;
    var newArrival = snapshot.val().firstTrainTime;
  
    var remainder = moment().diff(moment.unix(newArrival), 'minutes') % newFrequency;
    var minutes = newFrequency - remainder;
    var arrival = moment().add(minutes, 'm').format('hh:mm A');


  newTrainName.text(snapshot.val().trainName)
  newDestination.text(snapshot.val().destination)
  newFrequencyTd.text(newFrequency);
  newArrivalTd.text(arrival);
  newMinAway.text(minutes);

  // newMinAway.text(snapshot.val().)

  $('#tableBody').append(newRow);

  newRow
    .append(newTrainName)
    .append(newDestination)
    .append(newFrequencyTd)
    .append(newArrivalTd)
    .append(newMinAway)
  });

  // database.ref().on('child_added', function (snapshot) {
  //   var tName = snapshot.val().name;
  //   var tDestination = snapshot.val().destination;
  //   var tFirstTrain = snapshot.val().firstTrainTime;
  //   var tFrequency = snapshot.val().frequencyMin;

  //   var remainder = moment().diff(moment.unix(tFirstTrain), 'minutes') % tFrequency;
  //   var arrival = moment().add(minutes, 'm').format('hh:mm A')
  //   var minutes = tFrequency - remainder;

  //   $(".table > #tableBody").append(`<tr>
  //         <td>${tName}</td>
  //         <td>${tDestination}</td>
  //         <td>${tFrequency}</td>
  //         <td>${arrival}</td>
  //         <td>${minutes}</td>
  //         </tr>
  //       `);
  // });