console.log('hi');
$("#button").click(function () { 
      $("#iframe").attr("src", "http://www.google.com/");
}); 


function displayRobot() {
  var robot = document.getElementById("robotDisplay");
  
  if(robot.style.display === "none"){
    robot.style.display = "block"; 
    }
  
  else{
    robot.style.display = "none";
  }
}