var currentContent = "";
var categories = "test";
var returnpost = "";
var xhr = new XMLHttpRequest();

//Switches between content upon click
function navigateTo(contentToDisplay) {

	if (currentContent != contentToDisplay) {

		if (currentContent != "") {
			$("#" + currentContent).toggle();
		}

		$("#" + contentToDisplay).toggle();

		currentContent = contentToDisplay;

	}

}

	function showblog() {
		var blogScreen = document.getElementById("blogpost");

		xhr.open("GET", "reader.php?categories=" + categories, false);
		xhr.send();
		returnblog = JSON.parse(xhr.response);
		returnblog.reverse();
		for (var i = 0 ; i < returnblog.length ; i++) {
			//buitenste array
			var b = returnblog[i];
			blogScreen.innerHTML += "<div class='new-post'>"+ b[2] + "</div>" + "<br>";		
    	}

	}


