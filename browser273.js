$(document).ready(function (){
  $('#btnGetWeather').on('click',function(){
    var plaatsNaam = $('#txtCity').val();
    var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q='+plaatsNaam+'&APPID=3e7a4ae823f7aac5ffc36b2fc665c538';
    $.ajax({
      url:weatherUrl,
      dataType:'jsonp',
      success:function(weather){
        console.log(weather);
      }

    })


});

})
