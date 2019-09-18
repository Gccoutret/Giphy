$(document).ready(function(){

  var searches= ['hotdog','pizza','bagel', 'wink'];

  $(document).on('click', '.search-btn', function(){
     var apiKey = "api_key=pzS1gd5OekBfGA7piNtcDxbVkSiac1aL";
  var url = "https://api.giphy.com/v1/gifs/search?";
  
    var search= $(this).text()
    url= url + "limit=10"+ "&"+ "q=" +search + "&"+ apiKey;
    $.ajax({
      method: "GET",
      url: url,

    }).then(function(response){
      $(".gif-div").empty();
      console.log(response)
      response.data.forEach(function(gif){
        var gifAppend = $("<div>")
        var rating = $("<p>")
        var gifImg= $("<img>")

        rating.text(gif.rating)
        gifImg.attr("src", gif.images.fixed_height.url);
        gifAppend.append(rating).append(gifImg)
        $(".gif-div").append(gifAppend)
      
      })
    
  })
  })
  function makeButtons() {
    searches.forEach(function(button){
      var newSearch = $("<button class= 'search-btn'>")
      newSearch.text(button)
      $(".button-container").append(newSearch);

    })

  };

  makeButtons()















  
})