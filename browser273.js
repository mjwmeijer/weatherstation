$(document).ready(function (){
  $('#btnGetWeather').on('click',function(){
    var plaatsNaam = $('#txtCity').val();
    var weatherUrl = 'api.openweathermap.org/data/2.5/weather?q='+plaatsNaam;
  
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
