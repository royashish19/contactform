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

var dataref = firebase.database().ref("contactform");

dataref.on("value", gotdata);

function gotdata(data){

	// console.log(data.val());
	var value = data.val();
	var keys = Object.keys(value);
	// console.log(keys);
	for(var i=0; i < keys.length; i++){
		var k = keys[i];
		var name = value[k].name;
		var email = value[k].email;
		var phone = value[k].phone;
		// console.log(name);
		var table = document.getElementById("info");
		var row = table.insertRow();
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		cell0.innerHTML = i;
		cell1.innerHTML = name;
  		cell2.innerHTML = email;
  		cell3.innerHTML = phone;

	}


	document.getElementById("remove").onclick = function del(){

		document.querySelector('.col-25').style.display='block';
		document.querySelector('.col-75').style.display='block';
		document.querySelector('.alert').style.display='block';

		document.getElementById('deleteId').addEventListener('submit', deletion);

		function deletion(){
			var delid = document.getElementById("id").value;
			console.log(delid)
			firebase.database().ref('contactform/'+keys[delid]).remove();
		}
	}
}

