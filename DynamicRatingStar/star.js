var halfstar;
var disable = 0;
var Fullstar;
var renderstarcontainer=(inter,Values)=>{
    var ratingstar = document.createElement("div")
    ratingstar.classList.add('starconter');

  var Fullstar = parseInt(Values);
for(var i=0;i<Fullstar;i++){
var divTag=document.createElement("div");
divTag.classList.add("Fullstar")
ratingstar.append(divTag)
}
 halfstar=(Values%1==0) ? 0 : 1;
  if(halfstar)    {
var divTag=document.createElement("div")
divTag.classList.add("halfstar")
ratingstar.append(divTag);
}
 disable=5-(Fullstar+halfstar)
for(var i=0;i<disable;i++){
var divTag=document.createElement("div")
divTag.classList.add("disable")
ratingstar.append(divTag);
}
document.querySelector(inter).append(ratingstar)
}

document.addEventListener("DOMContentLoaded",()=>{
    renderstarcontainer(".content",4.5) 
    renderstarcontainer(".second",3) 
})