var theURL = 'http://pokeapi.co/api/v2/item/1/' 


$.ajax({
    url: theURL,
    success: function(data) {
        var pokemon= data;
        var name=pokemon.name;
       $('body').append(name);
    }
    })














