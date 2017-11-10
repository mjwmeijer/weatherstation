$(document).ready(function (){
  $('#btnGetWeather').on('click',function(){
    var plaatsNaam = $('#txtCity').val();
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+plaatsNaam+'&appid=3e7a4ae823f7aac5ffc36b2fc665c538';

    // example: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3e7a4ae823f7aac5ffc36b2fc665c538

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
