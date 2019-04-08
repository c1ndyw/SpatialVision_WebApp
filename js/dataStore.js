//dataStore.js
//Storing data to the local storage
window.onload = function (){
	if (localStorage) {
		var fullname = localStorage.getItem('fullname');
		var emailaddress = localStorage.getItem('emailaddress');	
		var dob = localStorage.getItem('dob');
		var location1 = localStorage.getItem('location');
		var lat = localStorage.getItem('lat');	
		var lng = localStorage.getItem('lng');

		if (fullname !== null) {
			document.getElementById('fullname').value = fullname ;
			document.getElementById('emailaddress').value = emailaddress ;
			document.getElementById('dob').value = dob ;
			document.getElementById('location').value = location1 ;
			document.getElementById('lat').value = lat ;
			document.getElementById('lng').value = lng ;
			//prompt(localStorage.getItem('fullname')) ;
			document.getElementById('formSbt').value = "Save" ;
			document.getElementById("logoutBtn").style.visibility = "visible" ;
			} 
	}
	 
}	
 // Add an event listener for form submissions
document.getElementById('profileForm').addEventListener('submit', function(evt) {
	evt.preventDefault();
	var fullname = document.getElementById('fullname').value;
	var emailaddress = document.getElementById('emailaddress').value;
	var dob = document.getElementById('dob').value;
	var lat = document.getElementById('lat').value;
	var lng = document.getElementById('lng').value ;
	var location1 = document.getElementById('location').value ;

	// Save the name in localStorage.
	localStorage.setItem('fullname', fullname);
	localStorage.setItem('emailaddress', emailaddress);
	localStorage.setItem('dob', dob);
	localStorage.setItem('lat', lat);
	localStorage.setItem('lng', lng);
	localStorage.setItem('location', location1);
	window.location.reload();
});
function logOut(){
	document.getElementById('formSbt').value = "Register" ;
	document.getElementById("logoutBtn").style.visibility = "hidden" ;
	localStorage.clear();
	window.location.reload();
}