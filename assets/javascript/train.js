// //firebase initializer

// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyB3kYpTao8Qjyj5VQHo36D20YNoatnaYg4",
//   authDomain: "train-scheduler-9222c.firebaseapp.com",
//   databaseURL: "https://train-scheduler-9222c.firebaseio.com",
//   projectId: "train-scheduler-9222c",
//   storageBucket: "",
//   messagingSenderId: "595003811266",
//   appId: "1:595003811266:web:727fd4b07e5e60d3"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// //variable to call the database
// const database = firebase.database();

// // on click to store the values of the typed text;
// $("#add-employee-btn").on("click", function (event) {
//   event.preventDefault();

//   //getting the users input
//   const trainName = $("#train-name-input").val().trim();
//   const destination = $("#destination-input").val().trim();
//   const trainTime = moment($("#train-time-input").val().trim(), "HH:mm").format("X");
//   const trainFrequency = moment($("#frequency-input").val().trim(), "minutes");
 


//   //creating an object to store info from the click

//   const newTrain = {
//     name: trainName,
//     destination: destination,
//     time: trainTime,
//     frequency: trainFrequency,
//   };
//   //pushing to the database using .ref
//   database.ref().push(newTrain);
//   //logging the info
//   console.log(trainName);
//   console.log(destination);
//   console.log(trainTime);
//   console.log(trainFrequency);
//   //cleariing the text boxes after submitting
//   $("#train-name-input").val("");
//   $("#destination-input").val("");
//   $("#train-time-input").val("");
//   $("#frequency-input").val("");

// });

// //getting te data from the database
// database.ref().on("child_added", function (childSnapshot) {
//   console.log(childSnapshot.val());

//   //storing info into a new variable
//   const trainName = childSnapshot.val().name;
//   const destination = childSnapshot.val().destination;
//   const trainTime = childSnapshot.val().time;
//   const trainFrequency = childSnapshot.val().frequency;
//   //logging the info
//   console.log(trainName);
//   console.log(destination);
//   console.log(trainTime);
//   console.log(trainFrequency);

//   //taking thetime info from unix into something readable

//   let trainTimeMilitary = moment.unix(trainTime).format("HH:mm");
//   console.log(trainTimeMilitary);
//   let freqencyMinutes = moment.unix(trainFrequency).format("mm");
//   console.log("minutes" + freqencyMinutes);
//   //variable for current time
//   let currentTime = moment().format("HH:mm");
//   console.log(currentTime);

//   // need a variable to store time of next arrival and to store time away
//   let nextTrainArrival = moment().diff(moment(trainTime + trainFrequency));
//   console.log("Jst the math" + trainFrequency % trainTime);
//   console.log("next train" + nextTrainArrival);
//   let nextTrainPretty = moment.unix(nextTrainArrival).format("HH:mm");
//   console.log("prett " + nextTrainPretty);

//   let timeToArrival = moment().diff(moment(trainTimeMilitary - currentTime  ));
//   console.log(timeToArrival);
//   let arrivalPretty = moment.unix(timeToArrival).format("HH:mm");
//   console.log("arrival time" + arrivalPretty)

//   //variable for next arrival takes initial time and compares it to current time and figures out when to place it
//   //variable for time away compares current time to expected arrival time


// //appending the new information to the table
//   let newRow = $("<tr>").append(
//     $("<td>").text(trainName),
//     $("<td>").text(destination),
//     $("<td>").text(freqencyMinutes),
//     $("<td>").text(nextTrainPretty),
//     $("<td>").text(arrivalPretty),
//     // $("<td>").text(empBilled)
//   );

//   //appending the table
//   $("#employee-table > tbody").append(newRow);

// });
//firebase initializer

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3kYpTao8Qjyj5VQHo36D20YNoatnaYg4",
  authDomain: "train-scheduler-9222c.firebaseapp.com",
  databaseURL: "https://train-scheduler-9222c.firebaseio.com",
  projectId: "train-scheduler-9222c",
  storageBucket: "",
  messagingSenderId: "595003811266",
  appId: "1:595003811266:web:727fd4b07e5e60d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//variable to call the database
const database = firebase.database();

// on click to store the values of the typed text;
$("#add-employee-btn").on("click", function (event) {
  event.preventDefault();

  //getting the users input
  const trainName = $("#train-name-input").val().trim();
  const destination = $("#destination-input").val().trim();
  const trainTime = moment($("#train-time-input").val().trim(), "HH:mm").format("X");
  const trainFrequency = $("#frequency-input").val().trim();


  //creating an object to store info from the click

  const newTrain = {
    name: trainName,
    destination: destination,
    time: trainTime,
    frequency: trainFrequency,
  };
  //pushing to the database using .ref
  database.ref().push(newTrain);
  //logging the info
  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(trainFrequency);
  //cleariing the text boxes after submitting
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-time-input").val("");
  $("#frequency-input").val("");

});

//getting te data from the database
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  //storing info into a new variable
  const trainName = childSnapshot.val().name;
  const destination = childSnapshot.val().destination;
  
  //logging the info
  
  
  
  
  //taking thetime info from unix into something readable
  
  // calculating times
  
  const trainTime = childSnapshot.val().time;
  let Frequency = parseInt(childSnapshot.val().frequency);
  let  firstTrain = moment(trainTime, "HH:mm").subtract(1, "years");
  console.log(firstTrain);
  
  let currentTime = moment();
  let currentTimeCalc = moment().subtract(1, "years");
  let diffTime = moment().diff(moment(firstTrain), "minutes");
  let tRemainder = diffTime%Frequency;
  let minutesRemaining = Frequency - tRemainder;
  let nextTRain = moment().add(minutesRemaining, "minutes").format ("hh:mm A");
  let beforeCalc = moment(firstTrain).diff(currentTimeCalc, "minutes");
  let beforeMinutes = Math.ceil(moment.duration(beforeCalc).asMinutes());

  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(Frequency);
  console.log(currentTime);
  console.log(nextTRain);
  console.log(beforeMinutes);

  // //appending the new information to the table
  let newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(Frequency),
    $("<td>").text(nextTRain),
    $("<td>").text(beforeMinutes),
    // $("<td>").text(empBilled)
  );

  //appending the table
  $("#employee-table > tbody").append(newRow);


});