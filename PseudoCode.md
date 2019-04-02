Give each user a place to store a Username

Display each player's Username, button choice, and wins/losses
  -Wins/losses should either be just that, OR username + wins and + losses
  -How do I differentiate between who clicked what button and how to log a      win/loss??

Make three buttons: Rock, Paper, Scissors.

Give each button a value R, P, S.

Link data to Firebase storage

Every round of the game:
  -$(this) button value wins or loses against other user button click
    -Match two arrays?
      -If arr1 is empty, store first click there
       Else store in arr2
        -If arr1 and arr2 have content in them, run gameOver function 
      -gameOver function:
        -compare the two arrays
        -user1 gets arr1, user2 gets arr2
        -rock beats scissors
        -scissors beats paper
        -paper beats rock

  -Only allow one click, then make other buttons (or all buttons) disabled      until other player selects something.

  -Create a chat area
