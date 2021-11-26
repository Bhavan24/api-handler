var content = 'application/json';

async function GET(url) {
	var auth = document.getElementById("auth_key").innerText;
	try {
		const options = {
			method: 'GET',
			headers: {
			'Content-Type': content,
			'Authorization': 'Bearer '+ auth,
			}
		};
		let response = await fetch(url, options);
		let json_response = response.json();
		return json_response;
	} catch (error) {
		console.log(error);
	}
}


async function POST(url, obj) {
	var auth = document.getElementById("auth_key").innerText;
	try {
		const options = {
			method: 'POST',
			headers: {
			'Content-Type': content,
			'Authorization': 'Bearer '+ auth,
			},
			body: JSON.stringify(obj)
		};
		let response = await fetch(url, options);
		let json_response = response.json();
		return json_response;
	} catch (error) {
		console.log(error);
	}
}


async function PUT(url, obj) {
	var auth = document.getElementById("auth_key").innerText;
	try {
		const options = {
			method: 'PUT',
			headers: {
			'Content-Type': content,
			'Authorization': 'Bearer '+ auth,
			},
			body: JSON.stringify(obj)
		};
		let response = await fetch(url, options);
		let json_response = response.json();
		return json_response;
	} catch (error) {
		console.log(error);
	}
}


async function DELETE(url) {
	var auth = document.getElementById("auth_key").innerText;
	try {
		const options = {
			method: 'DELETE',
			headers: {
			'Content-Type': content,
			'Authorization': 'Bearer '+ auth,
			}
		};
		let response = await fetch(url, options);
		let json_response = response.json();
		return json_response;
	} catch (error) {
		console.log(error);
	}
}