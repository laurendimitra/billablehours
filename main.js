
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
  
  var database = firebase.database;
  
  var employeename = "";
  var role = "";
  var startdate = 0;
  var monthlyrate = "";
  
  // Capture Button Click
  $("button").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    
    
    
    
    
    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    employeename = $("#employeename").val().trim();
    role = $("#role").val().trim();
    startdate = $("#start_date").val().trim();
    monthlyrate = $("#monthly_rate").val().trim();
    
    database.ref().push({

        employeename: employeename,
        role: role,
        startdate: startdate,
        monthlyrate: monthlyrate,


    });
});
