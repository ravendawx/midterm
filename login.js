window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var lUsername = document.forms["myLogin"]["username"].value;
	var lPassword = document.forms["myLogin"]["password"].value;

	if(username != lUsername){

		alert("Username หรือ Password ไม่ถูกต้อง");
		return false;

	}
	if(password != lPassword){

		alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
		return false;

	}
	else{

		alert("เข้าสู่ระบบสำเร็จ");

	}
	
}

			