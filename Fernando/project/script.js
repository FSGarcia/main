$(document).ready(function() {
    $("#weatherSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#weatherInput").val();
    console.log(value);

    var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=89a1cf009063217f990dde38d4949305";
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
	    console.log(json);
            var results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (var i=0; i<json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (var i=0; i<json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                results += ", "
            }
            results += "</p>";
            $("#weatherResults").html(results);
           
            }
        });
    });
});

/*var getQuestions = function() {

    console.log("Getting topic...");
    var topic = $('#topic').value; // get value
    console.log(topic);
    console.log("Got topic...");*/

$(document).ready(function() {
    $("#SOSubmit").click(function(e) {
	e.preventDefault();
	var value = $("#SOInput").val();
	console.log(value);    
    
	$.ajax({
	    url : 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle=' + value,
	    dataType : "json",
	    success : function(json){
		console.log(json);
		var results = '<ul>';
		for (var i = 0; i < json.items.length; i++)
		{
		    results += '<li><a href="' + json.items[i].link + ' ">' + json.items[i].title + '</a></li>';
		}
		results += '</ul>';
		$('#SOResults').html(results);
	    }
	});
    });
});


$(document).ready(function() {
    $("#Output").click(function(e) {
	e.preventDefault();
	var value = $("#Input").val();
	console.log(value);    
    
	$.ajax({
	    url : "http://api.yummly.com/v1/api/recipes?_app_id=7b6517f3&_app_key=55babe4b102abbba8ffb36a1369fa971&q=" + value,
	    
	    dataType : "json",
	    success : function(json){
		console.log(json);
		var results = '<ul>';
		results += '<p>Results for search query: ' + json.criteria.q + '</p>';
		
		for (var i = 0; i < json.matches.length; i++)
		{
		    results += '<li><a href="http://www.yummly.com/recipe/' + json.matches[i].id + '">' + json.matches[i].recipeName + '</a></li>';
		    
		    /*results += '<li><a href="' + json.matches[i].recipe + ' ">' + json.items[i].title + '</a></li>';*/
		}
		results += '</ul>';
		results += '<h3>' + json.attribution.text + '</h3>';
		$('#Results').html(results);
	    }
	});
    });
});

