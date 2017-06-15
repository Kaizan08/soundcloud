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
var url = "http://api.soundcloud.com/tracks/";
var client_id = '?client_id=8538a1744a7fdaa59981232897501e04';
function sendData(){
  url += client_id + '&q='+ search.value; 
  console.log(url);
};


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play