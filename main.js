// Initialize Firebase
var config = {
    apiKey: "AIzaSyDqOwmALhyP_QMo3-Mf3AGDu4dekwHAw6A",
    authDomain: "billablehours-de27a.firebaseapp.com",
    databaseURL: "https://billablehours-de27a.firebaseio.com",
    projectId: "billablehours-de27a",
    storageBucket: "billablehours-de27a.appspot.com",
    messagingSenderId: "399251008001"
};

firebase.initializeApp(config);

var database = firebase.database();

var employeename = "";
var role = "";
var startdate = 0;
var monthlyrate = "";



$(document).ready(function() {
    var now = moment().subtract(startdate);

    console.log(now._d);


    database.ref().on("child_added", function(childSnapshot) {
        $(".table").append("<tr><td id='name'> " + childSnapshot.val().employeename +
            " </td><td id='role'> " + childSnapshot.val().role +
            " </td><td id='startDate'> " + childSnapshot.val().startdate +
            " </td><td id='months_worked'> " + now.diff(childSnapshot.val().startdate, "months") + "</td><td id='monthlyRate'>" + childSnapshot.val().monthlyrate +
            "</td><td id='totalbilled'>$" + (now.diff(childSnapshot.val().startdate, "months") * (childSnapshot.val().monthlyrate)).toFixed(2) + "</td></tr>");

    });



    // Capture Button Click
    $("#submit").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
        // YOUR TASK!!!
        // Code in the logic for storing and retrieving the most recent user.
        // Don't forget to provide initial data to your Firebase database.
        employeename = $("#employeename").val().trim();
        role = $("#role").val().trim();
        startdate = $("#start_date").val().trim();
        monthlyrate = $("#monthly_rate").val().trim();
        var now = moment();
        time_worked = now.diff(startdate, 'months');
        console.log("This is the start date: " + startdate + " and this is the time worked: " + time_worked);







        // startdate = convert_date(startdate);

        // startdate_second = conver_again(startdate);


        database.ref().push({
            employeename: employeename,
            role: role,
            startdate: startdate,
            monthlyrate: monthlyrate,
        });

        database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val().name);
            console.log(childSnapshot.val().name);
            console.log(childSnapshot.val().email);
            console.log(childSnapshot.val().age);
            console.log(childSnapshot.val().comment);
            console.log(childSnapshot.val().joinDate);
        })


    })

})