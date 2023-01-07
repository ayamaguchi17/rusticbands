let sideNav = document.getElementById("side-nav");

closeNav();

function openNav() {
    document.getElementById("side-nav").style.width = "50vw"
    document.getElementById("blocker").style.width = "100vw"
    sideNav.classList.add("active")
    
    
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0%"
    document.getElementById("blocker").style.width = "0%"
    sideNav.classList.remove("active")
}



// for google map
function initMap() {
    // The location of uji
    const uji = { lat: 34.89044, lng: 135.80325 };
    // The map, centered at uji
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uji,
    });
    // The marker, positioned at uji
    const marker = new google.maps.Marker({
        position: uji,
        map: map,
    });
}

window.initMap = initMap;


// scroll up

let upBtn = document.getElementById("up-btn")

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  }

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  