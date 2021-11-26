var base_url = "";
var obj = {
	"brand_name": "brand_name new",
	"engine_capacity": "93",
	"speed": "47",
	"color": "colo new",
	"owner": "ownep 1",
	"vehicle_number": "32",
	"id": "1"
}

var get_btn = document.getElementById("get");
var post_btn = document.getElementById("post");
var put_btn = document.getElementById("put");
var delete_btn = document.getElementById("delete");
var text = document.getElementById("text");
var get_url = document.getElementById("get_url");
var post_url = document.getElementById("post_url");
var post_body = document.getElementById("post_body");
var put_url = document.getElementById("put_url");
var put_body = document.getElementById("put_body");
var delete_url = document.getElementById("delete_url");

post_body.value = JSON.stringify(obj, null, '\n\t');
put_body.value = JSON.stringify(obj, null, '\n\t');

async function getRequest() {
  text.value = "Loading...";
  base_url = get_url.value;
  let response = await GET(base_url);
  text.value = JSON.stringify(response, null, '\t');
}

async function postRequest() {
  text.value = "Loading...";
  base_url = post_url.value;
  console.log(post_body.value);
  let new_obj = JSON.parse(post_body.value);
  let response = await POST(base_url,new_obj);
  text.value = JSON.stringify(response, null, '\t');
}

async function putRequest() {
  text.value = "Loading...";
  base_url = put_url.value;
  let new_obj = JSON.parse(put_body.value);
  let response = await PUT(base_url,new_obj);
  text.value = JSON.stringify(response, null, '\t');
}

async function deleteRequest() {
  text.value = "Loading...";
  base_url = delete_url.value;
  let response = await DELETE(base_url);
  text.value = JSON.stringify(response, null, '\t');
}


get_btn.addEventListener("click", getRequest);
post_btn.addEventListener("click", postRequest);
put_btn.addEventListener("click", putRequest);
delete_btn.addEventListener("click", deleteRequest);


async function authrequest() {
	base_url = document.getElementById("auth_url").value;
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let user = {
		"username": username,
		"password": password
	}
	let response = await POST(base_url, user);
	text.value = "AUTHTOKEN = " + response.authToken;
	document.getElementById("auth_key").innerText = response.authToken;
}
document.getElementById("auth").addEventListener("click", authrequest);