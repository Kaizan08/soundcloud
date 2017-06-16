/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
var musicdiv = document.querySelector(".player");
var soundcontrol = document.querySelector(".music-player");
var search = document.querySelector(".search_input");
var search_form = document.querySelector(".search_form");
var results = document.querySelector(".results");
var submit = document.querySelector("#submit");

// 2. Create your `onSubmit` event for getting the user's search term
//http://api.soundcloud.com/users/52955/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f
//var url = "http://api.soundcloud.com/tracks/";
var url = "http://api.soundcloud.com/users/"
var client_id = "?client_id=8538a1744a7fdaa59981232897501e04";
function sendData() {
  var urltosearch = search.value;
  url += urltosearch +'/' + client_id ;
  axios.get(url).then(function(data) {
    userId = data["data"]["id"];
    getTracks(userId);
  });
}

function getTracks(userId){
  var trackurl = "http://api.soundcloud.com/users/";
  trackurl += userId + '/tracks' + client_id;
  axios.get(trackurl).then(function(data){
    pushToPage(data);
  });
}
// 3. Create your `fetch` request that is called after a submission

function pushToPage(data) {
  // automatically load first song after search completes
  // soundcontrol.src = data['data'][0]['stream_url'] + client_id;
  // soundcontrol.autoplay = true;
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    buildoutput(output[i]);
  }
}

// 4. Create a way to append the fetch results to your page
function buildoutput(data){

  
}
// 5. Create a way to listen for a click that will play the song in the audio play
