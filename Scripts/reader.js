var currentContent = "";

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