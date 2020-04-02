var city="haifa";
const weatherMapKey = "2ef6a42fb0c1fbf124ac800524fde470";
var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherMapKey;

//async function weatherAPI(){
//  const data = await fetch(url);
//  const parseData = await data.jason();
//  var weatherIcon=parseData.weather[0].icon;
//  "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
//}
//weatherAPI()
//.catch(err => 
//      document.getElementById("box").innerHTML="Error Loading!"
//      );

fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(weatherObj) {
        //weather icon
    var weatherIcon=weatherObj.weather[0].icon;
    document.getElementById("box").src="http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
    document.getElementById("ox").innerHTML = weatherObj.weather[0].description;
    //check icon for day or night
    //  if(weatherIcon.substring(weatherIcon.length-1)=="d")
    //      document.getElementById("box").style.backgroundColor = "skyblue" ;
    //  else
    //      document.getElementById("box").style.backgroundColor = "black";
    })
    .catch(function(error) {
      document.getElementById("box").innerHTML="Loading Error!";
    })


    
