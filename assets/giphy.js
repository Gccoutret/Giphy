$(document).ready(function(){

  var searches= ['hotdog','pizza','bagel', 'wink'];

  $(document).on('click', '.search-btn', function(){
  
    var search= $(this).text()
    callApi(search)
  })
  function callApi(populate){
     var apiKey = "api_key=pzS1gd5OekBfGA7piNtcDxbVkSiac1aL";
  var url = "https://api.giphy.com/v1/gifs/search?";
  var q=populate
  url= url + "limit=10"+ "&"+ "q=" +populate + "&"+ apiKey;
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

  }
  function makeButtons() {
    $(".button-container").empty();

    searches.forEach(function(button){
      var newSearch = $("<button class= 'search-btn'>")
      newSearch.text(button)
      $(".button-container").append(newSearch);

    })

  };

  $("#add-search").on("click", function(button) {
    event.preventDefault();
    var gifSearch = $("#search-input").val().trim();
    callApi(gifSearch);
     if(!(searches.includes(gifSearch))){
    searches.push(gifSearch)
    makeButtons();
    }
  });

  makeButtons()

 















  
})