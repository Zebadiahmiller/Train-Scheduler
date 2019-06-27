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
  const trainTime = childSnapshot.val().time;
  const trainFrequency = childSnapshot.val().frequency;
  //logging the info
  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  //taking thetime info from unix into something readable

  let trainTimeMilitary = moment.unix(trainTime).format("HH:mm");




});