var firebaseConfig = {
  apiKey: "AIzaSyAzivRs0Bqw_TAs5na_qdjT17NIOfWr4DQ",
  authDomain: "form-4564c.firebaseapp.com",
  databaseURL: "https://form-4564c.firebaseio.com",
  projectId: "form-4564c",
  storageBucket: "form-4564c.appspot.com",
  messagingSenderId: "1001191781821",
  appId: "1:1001191781821:web:c67fe572ece5d6cf7d4ed4",
  measurementId: "G-1VLQQHHGCT"
};

firebase.initializeApp(firebaseConfig);

var contactref = firebase.database().ref("contactform");

document.getElementById('form1').addEventListener('submit', submitform);


function getInputVal(id){
	return document.getElementById(id).value;
}

function saveform(name, email, phone){
	var newcontactref = contactref.push();
	newcontactref.set({
		name: name,
		email: email,
		phone: phone
	})
}

function submitform(e){
	e.preventDefault();
	
	var name = getInputVal("name");
	var email = getInputVal("email");
	var phone = getInputVal("phone");

	saveform(name, email, phone);

	document.querySelector('.alert').style.display='block';

	setTimeout(function(){
		document.querySelector('.alert').style.display='none';
	},2000);

	document.getElementById('form1').reset();
}
