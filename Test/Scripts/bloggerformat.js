
var xhr = new XMLHttpRequest();

function submitMessage() {

	var categories = document.getElementById("categories").value;
	//this line should make sure the content of the blogpost including format and jpg`s is added to the database but for some reason it does not
	blogposts = tinymce.get('blogposts').getContent({format: 'raw'});

	xhr.open("POST", "blogger.php?categories=" + categories + "&blogposts=" + blogposts, false);
	xhr.send();
}