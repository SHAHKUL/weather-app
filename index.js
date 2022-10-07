async function foo(){
    var text=document.getElementById('text').value
    var res= await fetch(`https://api.weatherapi.com/v1/current.json?key=052a3180609f4a45ae2105024221201&q=${text}&aqi`)
    var result= await res.json()
  
   var temp=document.getElementById('temp').innerHTML=`${result.current.temp_c} Degree Celsius`
  
    console.log(result);
    var wind=document.getElementById('wind').innerHTML=`Wind ${result.current.wind_kph} Km/Hr`
  
    var pressure=document.getElementById('pressure').innerHTML=`Pressure ${result.current.pressure_in} Pascal`
  
    var humidity=document.getElementById('humidity').innerHTML=`Humidity ${result.current.humidity} %`
  
    var date=document.getElementById('last').innerHTML=`Last Updated    ${result.current.last_updated}`
  
    var feelslike=document.getElementById('feelslike').innerHTML=`Feels Like     ${result.current.feelslike_c} Celsius`
  
    var icon=document.getElementById('image').src=`${result.current.condition.icon} `
  
  }