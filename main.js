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

var client_id = "?client_id=8538a1744a7fdaa59981232897501e04";
function sendData() {
  results.innerHTML = "";
  var url = "http://api.soundcloud.com/users/"
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
  var h2element = document.createElement('h2');
  h2element.textContent = 'Search Results:';
  h2element.classList.add('search_results');
  h2element.style.fontWeight = 'bold';
  results.appendChild(h2element);
  var bottomdiv = document.createElement('div');
  bottomdiv.classList.add('bottomresults');
  results.appendChild(bottomdiv);
  for (var i = 0; i < data["data"].length; i++) {
    buildprofile(data["data"][i], bottomdiv);
  }
}

// 4. Create a way to append the fetch results to your page
function buildprofile(data, parent){
  var musicdiv = document.createElement('div');
  musicdiv.classList.add('music_prof');
  parent.appendChild(musicdiv);
  musicdiv.addEventListener('click', function(e){
    soundcontrol.src = data["stream_url"]+client_id;
    soundcontrol.autoplay = true;
  });
  var img = document.createElement('img');
  img.src = data["artwork_url"];
  musicdiv.appendChild(img);
  var title = document.createElement('p');
  title.textContent = data["title"];
  musicdiv.appendChild(title);
  var band = document.createElement('p');
  if (!data["username"]){
    band.textContent = "No Username";
  } 
  else {
    band.textContent = data["username"];
  }
  musicdiv.appendChild(band);
}
// 5. Create a way to listen for a click that will play the song in the audio play
