
var xhr = new XMLHttpRequest();
var categories = "test";
// for the retrieve messages function change 0 to avoid seeing really old messages

/*$("#send").click(function() {
	var newblogpost= $("#blogposts").val();
}*/
function submitMessage() {
	blogposts = document.getElementById("blogposts").value;
	xhr.open("POST", "blogger.php?categories=" + categories + "&blogposts=" + blogposts, false);
	xhr.send();
	console.log(xhr);
}


// function sends message to the server and displays in chat-messages
	/*$("#send").click(function() {
		//user name added to message
		var userID = $(".chatname").val();
		var allMessage = $("#chat-messages").html();
		var newMessage = $("#textbox").val();
		//console.log(userID);
		// username = "<span class = 'username' style='color:red'>" + userID + "</span> <span class = 'username'> says: </span>";
		username =  userID + " says:";
		//function to clear textbox after sending message
		$("#textbox").val("");
		//sending to server username+message
		xhr.open("PUT", "apitier2.php?&key=" + key + "&value=" + username + newMessage, false);
		xhr.send ();
		//show all messages
		$("#chat-messages").html(allMessage);
		//scrolls down on send automatically
		scrollToBottom();
	});*/