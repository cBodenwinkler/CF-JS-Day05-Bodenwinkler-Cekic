var sandwichData = JSON.parse(sandwiches);
var friesData = JSON.parse(fries);




document.getElementById("result").innerHTML = "My favorite sandwich is a " + sandwichData.sandwich + " which has approximately " + sandwichData.calories + " calories, along with it I enjoy eating " + friesData.fries_size + " which have about " + friesData.calories + " calories.";