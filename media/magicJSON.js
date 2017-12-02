/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function magic(value) {
 var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "media/jsonRequest.json", true);
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          var response = JSON.parse(this.responseText);
          
          var image = '<img src="' + response[value].picURL + '" />';
          
          var x = "";
          for(var i = 0; i < response[value].location.length; i++) {
              x += "<li>" + response[value].location[i] + "</li>";
          }
          
          document.getElementById("jsonHeader").innerHTML = (Number(value) + 1) + " - " + response[value].card;
          document.getElementById("jsonPic").innerHTML = image;
          document.getElementById("jsonDetails").innerHTML = "Mana: " + response[value].mana + "<br>Type: " + response[value].type;
          
          var jsonString = JSON.stringify(response[value], null, 4);
          document.getElementById("jsonStringOutput").innerHTML = "<hr \><p><b>JSON converted to a string</b></p><pre>" + jsonString + "</pre>";
      }
    };
xhttp.send();   
}

