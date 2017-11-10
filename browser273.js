$(document).ready(function (){
  $('#btnGetWeather').on('click',function(){
    var plaatsNaam = $('#txtCity').val();
    var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q='+plaatsNaam+'&APPID=3e7a4ae823f7aac5ffc36b2fc665c538';
    $.ajax({
      url: 'https://api.wunderground.com/api/4e1fe0d302980707/geolookup/conditions/q/NY/Manhattan.json',
      datatype: 'jsonp',
      success: function(data) {
        console.log($('.weather').html('<p class="data">' +
        data.current_observation.weather +'<br />' + data.current_observation.temp_c + ' degrees Celsius</p>'));
      }
    });


    $.ajax({
      url:weatherUrl,
      dataType:'jsonp',
      contentType:'application/json',
      success:function(weather){
        console.log(weather);
      }

    })


});

})
