document.getElementById("contactForm").onsubmit = function () {
 alert("Your inquiry has been submitted. ");
 return false;
};
 
document.getElementsByTagName("tr")[1].onclick = function () {
 alert("Monday class at 10 - 11 PM in room B20.104");
};

 
document.getElementsByTagName("tr")[2].onclick = function () {
 alert("Thursday class at 12 - 1 PM in room B20.104");
