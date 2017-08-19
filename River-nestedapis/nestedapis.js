 var theUrl=" https://randomuser.me/api/"
 var theUrl2="https://restcountries.eu/rest/v2/alpha/US"

  $.ajax({
  dataType: 'json',
  url: theUrl,
  success: function(data) {
    var name = data.results[0].name.first;
    var gender = data.results[0].gender;
    var location=data.results[0].nat;
    var email=data.results[0].email;    
    $('body').append("<p>"+gender+"</p>")
    $('body').append("<p>"+name+"</p>")
    $('body').append("<p>"+location+"</p>")
    $('body').append("<p>"+email+"</p>")
   }
});
      
  
  
