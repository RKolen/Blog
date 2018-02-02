
var xhr = new XMLHttpRequest();

function submitMessage() {

	var categories = document.getElementById("categories").value;
	blogposts = document.getElementById("blogposts").value;

	xhr.open("POST", "blogger.php?categories=" + categories + "&blogposts=" + blogposts, false);
	xhr.send();

}
