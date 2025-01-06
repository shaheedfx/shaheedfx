document.addEventListener("DOMContentLoaded", function() { 
 // Smooth Scroll to "About" section when button is clicked  
 const exploreButton = document.getElementById("exploreButton");

 exploreButton.addEventListener("click", function() {      
   document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
});  