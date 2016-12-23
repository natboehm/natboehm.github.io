var currentTime = new Date();
var hours = currentTime.getHours();

if (hours < 12 && hours >= 0) {
    document.getElementById("greeting").innerHTML = "Good Morning, I'm Natalie. I like greasy food, slobbery dogs, & long hikes.";
} else if (hours > 12 && hours < 18) {
     document.getElementById("greeting").innerHTML = "Good Afternoon, I'm Natalie. I like greasy food, slobbery dogs, & long hikes.";
} else if (hours > 18 && hours < 24) {
    document.getElementById("greeting").innerHTML = "Good Evening, I'm Natalie. I like greasy food, slobbery dogs, & long hikes.";
} else {
    console.log("Error in retrieving time.");
}
