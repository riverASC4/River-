var ARphotos = ["http://images.akc.org/breeds/action_images/rhodesian_ridgeback.jpg","http://www.dog-learn.com/dog-breeds/rhodesian-ridgeback/images/rhodesian-ridgeback-u4.jpg","http://upload.wikimedia.org/wikipedia/commons/b/b3/Rhodesian_Ridgeback_4500.JPG","http://3.bp.blogspot.com/-a3SdgpYCb0A/T_E48HaMGuI/AAAAAAAAALw/Q9VD2CTpOVs/s1600/Rhodesian-Ridgeback2.jpg","http://www.dogbreedanswers.com/wp-content/uploads/2016/03/Rhodesian-Ridgeback-Puppy-2.jpg","https://bowwowinsurance.com.au/wp-content/uploads/2014/12/rhodesian-ridgeback-puppies.jpg","http://www.rrshona.com/img/1.JPG","http://elelur.com/data_images/dog-breeds/rhodesian-ridgeback/rhodesian-ridgeback-03.jpg","http://www.rhodesian-ridgeback-puppies.co.uk/wp-content/uploads/2012/02/MG_8245.jpg","http://remarkabledogs.com/wp-content/uploads/2009/08/rhodesian_ridgeback.jpg","http://www.ridgebackshop.de/wp-content/uploads/2014/10/rhodesian-ridgeback-35.jpg","http://1.bp.blogspot.com/-DQUaV8pKhkU/TiB5La_srNI/AAAAAAAABz0/70ALsWRS7yE/s1600/Rhodesian+Ridgeback+dog+03.jpg","http://3.bp.blogspot.com/-JVktLQrSYTQ/Urw-IpgvWMI/AAAAAAAAB9s/ZQbfsT2cJVs/s1600/adriano-bacchella-domestic-dogs-seven-rhodesian-ridgeback-puppies-sitting-on-steps.jpg","http://blog.dublindog.com/wp-content/uploads/2015/02/Rhodesian-Ridgeback-Body-Image-11.jpg","http://blog.dublindog.com/wp-content/uploads/2014/12/rhodesian1-1024x558.jpg","http://upload.wikimedia.org/wikipedia/commons/d/d1/Rhodesian_ridgeback_head_study.jpg","http://cdn3-www.dogtime.com/assets/uploads/gallery/rhodesian-ridgeback-dog-breed-pictures/4-layingalert.jpg","http://www.yurtopic.com/family/pets/images/watch-dogs/Rhodesian-Ridgeback-Bitch.jpg","http://www.wiki-pet.com/images/breeds/dog/breed-images/166/super-size/rhodesian-ridgeback-3.jpg","http://www.pets4homes.co.uk/images/articles/2644/large/rhodesian-ridgeback-longevity-health-and-health-testing-54ea2007ca4b6.jpg","http://www.shangani.de/rhodesian-ridgeback-photos-5-2010/rhodesian-ridgeback-eshe-asante.jpg","http://www.tuamigoelperro.es/wp-content/gallery/rhodesian-ridgeback/rhodesian_ridgeback_cachorros.jpg","http://www.truthsurvival.com/wp-content/uploads/2016/04/Rhodesian-Ridgeback-5-1024x679.jpg","http://static.wamiz.fr/images/animaux/chiens/large/rhodesian-ridgeback.jpg","http://latesthdwallpapers1.com/wp-content/uploads/2015/04/Rhodesian-Ridgeback-1.jpg","http://pieski.net/psy/d/rhodesian-ridgeback.jpeg","http://www.rhodesian-ridgeback-puppies.co.uk/wp-content/uploads/2012/03/MG_9169.jpg","http://www.tiptopglobe.com/big-photo/rhodesian-ridgeback-dog-standard-20.jpg","http://www.rhodesian-ridgeback-puppies.co.uk/wp-content/uploads/2012/04/MG_9673.jpg","http://www.dogbreedanswers.com/wp-content/uploads/2016/03/Rhodesian-Ridgeback-Hunting.jpg","http://www.rhodesian-ridgeback-puppies.co.uk/wp-content/uploads/2012/09/Rhodesian-Ridgeback-Puppies_024.jpg","http://www.africantreasurerr.com/wp-content/uploads/kurun.jpg","http://1.bp.blogspot.com/_0BuvID10bgY/S9j_3aFZs_I/AAAAAAAACAA/mcCeT9qvMYo/s1600/Ridgeback_on_trail.jpg"];

$("html").keypress(function() { 
  randomdog();
});

function randomdog(){
  var RandomImg= ARphotos[Math.floor((Math.random()*ARphotos.length) )];
    $("#IMG2").attr("src", RandomImg);
}
