//dit werkt niet op github: er is geen

$(document).ready(function (){
  $('#btnGetWeather').on('click',function(){
    var plaatsNaam = $('#txtCity').val();
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+plaatsNaam+
    '&units=metric&lang=nl&appid=3e7a4ae823f7aac5ffc36b2fc665c538';



    $.ajax({
      url:weatherUrl,
      dataType:'jsonp',
      contentType:'application/json',
      success:function(weather){
        console.log(weather);
        //nog eens goed bekijken waarom href hier goed gaat!
        var linkje = 'https://openweathermap.org/city/'+weather.coord.id;
        var weerInformatie = '<strong><a href="' +linkje+ '" target="_blank">'+weather.name +
        ' (' +weather.sys.country+ ')</a></strong>';
        weerInformatie += ', temperatuur ' + weather.main.temp +' graden';
        $('#divResult').append(weerInformatie);
      }

    })


});

})
