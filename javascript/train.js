

//firebase web address with keys
  var config = {
    apiKey: "AIzaSyAtBCILoZ25Psl7S7M0bUZGppqyvFXUNmk",
    authDomain: "trainstation-e3e71.firebaseapp.com",
    databaseURL: "https://trainstation-e3e71.firebaseio.com",
    projectId: "trainstation-e3e71",
    storageBucket: "",
    messagingSenderId: "545484923316"
  };
  firebase.initializeApp(config);  
  //reference for database 
  var database = firebase.database();
  var name = "";
  var dest = "";
  var freq = "";
  var trainTime = "";
  
  
  var rows = 0;


function timer() {

    $("#clock").text("Local Time : " + moment().format('LTS'));

}

setInterval(timer, 1000);


function clicked(event) {
    timer();
    retrieve();
    getRandom();
    
    name = $("#name").val().trim();
    dest = $("#destination").val().trim();
    freq = $("#frequency").val().trim();
    trainTime = $("#next").val().trim();
    
    
    database.ref().set({
        name:name,
        dest:dest,
        freq:freq,
        trainTime:trainTime,
       
    });


}

function retrieve() {
    var countDown = 60;
    var numberOfInt = 0;
    var nameValue = document.getElementById("name").value;
    var destination = document.getElementById("destination").value;
    var frequency = document.getElementById("frequency").value;
    var next = document.getElementById("next").value;
    // var away = document.getElementById("away").value;

    
    countDown--;



    if (rows === 0) {
        $("#onea").text(nameValue);
        $("#oneb").text(destination);
        $("#onec").text(frequency);
        $("#oned").text(next);
        $("#onee").text (Math.floor(Math.random()* 30));

    } else if (rows === 1) {
        $("#twoa").text(nameValue);
        $("#twob").text(destination);
        $("#twoc").text(frequency);
        $("#twod").text(next);
        $("#twoe").text (Math.floor(Math.random()* 15));
    } else if (rows === 2) {
        $("#threea").text(nameValue);
        $("#threeb").text(destination);
        $("#threec").text(frequency);
        $("#threed").text(next);
        $("#threee").text (Math.floor(Math.random()* 45));
    } else if (rows === 3) {
        $("#foura").text(nameValue);
        $("#fourb").text(destination);
        $("#fourc").text(frequency);
        $("#fourd").text(next);
        $("#foure").text (Math.floor(Math.random()* 60));
    } else if (rows === 4) {
        $("#fivea").text(nameValue);
        $("#fiveb").text(destination);
        $("#fivec").text(frequency);
        $("#fived").text(next);
        $("#fivee").text (Math.floor(Math.random()* 38));
    } else if (rows === 5) {
        $("#sixa").text(nameValue);
        $("#sixb").text(destination);
        $("#sixc").text(frequency);
        $("#sixd").text(next);
        $("#sixe").text (Math.floor(Math.random()* 10));
    } else if (rows === 6) {
        $("#sevena").text(nameValue);
        $("#sevenb").text(destination);
        $("#sevenc").text(frequency);
        $("#sevend").text(next);
        $("#sevene").text (Math.floor(Math.random()* 60));
    } else {
     
        for (rows = 0; rows < 7; i++){

        }
    } 
   
   
    rows++;


} 

 function getRandom(){
  
}





