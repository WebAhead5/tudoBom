function getGif(){
    fetch("https://api.giphy.com/v1/gifs/search?q=multitasking&api_key=bF0nNKQwebanW5ikOpCFyikV40BIDBsk")
    .then(function(data){
      console.log("1")
      return data.json();
    })
    .then(function(gifs){
      var gifDom = document.getElementById("box");
      var randomImage = parseInt(Math.random()*Object.keys(gifs.data).length);
      var link = gifs.data[randomImage].images.downsized_large.url;
      console.log("link is: ", link)
      gifDom.src = link;
    })
    .catch(function(error){
      console.log("Well, that's an error...")
    })
  }
  getGif();