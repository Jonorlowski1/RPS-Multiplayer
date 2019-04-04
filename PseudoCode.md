Jumbotron for the heading

Two containers, one a table and one a form with submit button

Sync with Firebase to make sure mulitple users can access the same data across devices.
  Firebase needs:
    var trainName
    var destination
    var frequency
    var nextArrival
    var minutesAway

When user enters in the "First Train Time", set to only take military time
  Military time needs to be converted to standard time when it displays

  Use Moment.js to take the first train time, multiply the frequency, and alert the user of the next arrival with .moment() for the current moment in time.

Needs to recalculate every time the page is refreshed
  BONUS: recalculate every minute with an interval timer

Dynamically, through jQuery, append table contents when "submit" button is clicked

Clear form fields on "submit" click

<!-- ***GET THE INFORMATION TO DISPLAY BEFORE DOING THE MOMENT.JS AND MATH*** -->