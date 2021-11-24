var mainFuse = prompt("Please enter the size of your main fuses");
var siteFuse = prompt("Please enter the size of your site fuses");
var ymm = prompt("Please choose your car");

var phases = Get how many phases car can charge on.
var amp = and at what amp.

var W = amp * 230;
var kW = insertDecimal;

function insertDecimal(amp) {
   return (amp / 10).toFixed(2);
}

If (mainFuse => siteFuse){
  if (mainFuse <= amp){
    document.getElementById("demo").innerHTML = "Your construction supports charging on " + amp + " and on " + phases + ", which means you kan charge with an effect of ca " + kW;
    document.getElementById("demo").innerHTML = "Your constructions limiting factor is the onboard charger of your car";
  }
  else {
    document.getElementById("demo").innerHTML = "Your construction supports charging on " + mainFuse + " and on " + phases + ", which means you kan charge with an effect of ca " + kW;
    document.getElementById("demo").innerHTML = "Your constructions limiting factor is the size of your fuses";
  }
}
else {
  document.getElementById("demo").innerHTML =
  "You should contact an electrician to change the size of the fuses for the site. They should be of lower amp than your main fuses";
}