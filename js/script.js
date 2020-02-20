$(".btn").click(function(){
  let term = $(".form-control").val();
  console.log(term);
  fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`)
  .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          $(".gif").append(`<img src="${data[0].images.original.url}">`);
          console.log(data);
        });


});