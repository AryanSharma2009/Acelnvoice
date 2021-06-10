

 // Your web app's Firebase configuration
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

  document.getElementById("user_name").innerHTML = "Welcome " + user_name +" !";
  
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";  
      //End code
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}