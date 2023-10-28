const nav = ["Home", "About Us", "Restaurant", "Contact", "Delivery"];

const links = ["index.html", "#", "restaurant.html", "contact.html", "delivery.html"];
// nav.push("Delivery");
// links.push("delivery.html");

let navtext = '<ul class="flex">';

for(i=0; i<nav.length; i++){
    navtext += '<li><a href="'+ links[i] +'">' + nav[i] + "</a></li>";
    console.log(navtext);
}

navtext+= "</ul>";

console.log(navtext);

document.getElementById("nav").innerHTML = navtext;

function show(){
    document.getElementById('chatbox').style.display = 'block';
}

function hide(){
    document.getElementById('chatbox').style.display = 'none    ';
}