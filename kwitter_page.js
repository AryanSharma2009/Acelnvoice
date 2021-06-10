var firebaseConfig = {
      apiKey: "AIzaSyBqymwxGUIkSDGg6d8l6aqDQcU4F2nfPyk",
      authDomain: "kwitter-ea311.firebaseapp.com",
      databaseURL: "https://kwitter-ea311-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea311",
      storageBucket: "kwitter-ea311.appspot.com",
      messagingSenderId: "576121371257",
      appId: "1:576121371257:web:8ceecc4fddeb99654732a8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name, 
            message : msg,
            like : 0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
