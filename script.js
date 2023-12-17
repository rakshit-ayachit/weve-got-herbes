var home = document.getElementById("home");
var resetAble = false;

var about = document.getElementById("about");
var aboutTitle = document.getElementById("about-title");
var aboutContent = document.getElementById("about-content");

var classify = document.getElementById("classify");
var classifyTitle = document.getElementById("classify-title");
var classifyContent = document.getElementById("classify-content");

var chat = document.getElementById("chat");
var chatTitle = document.getElementById("chat-title");
var chatContent = document.getElementById("chat-content");



function reset() {
	//reset about
	about.classList.remove("about-full-about");
	about.classList.remove("classify-full-about");
	about.classList.remove("chat-full-about");
	aboutTitle.classList.remove("hidden");
	aboutTitle.classList.remove("rotate");
	aboutContent.classList.add("hidden");

	//reset classify
	classify.classList.remove("about-full-classify");
	classify.classList.remove("classify-full-classify");
	classify.classList.remove("chat-full-classify");
	classifyTitle.classList.remove("hidden");
	classifyTitle.classList.remove("rotate");
	classifyContent.classList.add("hidden");

	//reset chat
	chat.classList.remove("about-full-chat");
	chat.classList.remove("classify-full-chat");
	chat.classList.remove("chat-full-chat");
	chatTitle.classList.remove("hidden");
	chatContent.classList.add("hidden");

	//reset home
	home.classList.remove("full-home");

}
about.addEventListener("click", function(){
	reset();
	about.classList.add("about-full-about");
	classify.classList.add("about-full-classify");

	chat.classList.add("about-full-chat");

	aboutTitle.classList.add("hidden");
	aboutContent.classList.remove("hidden");

	home.classList.add("full-home");
	resetAble = true;
});

classify.addEventListener("click", function(){
	window.location.href = "classifier.html";
});

chat.addEventListener("click", function() {
    // Add any other actions you want to perform before redirecting (if needed)
    
    // Redirect to a different page
    window.location.href = "https://chatbot-only.streamlit.app"; // Replace with your desired URL
});


home.addEventListener("click", function(){
	if(resetAble){
		reset();
	} else {

	}
});

$.ajax({
    url: '/api/data_endpoint',  // This should match the Flask route you want to access
    method: 'GET',
    success: function(data) {
        // Handle the data returned from the server
    }
});