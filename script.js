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



// // for google map
// function initMap() {
//     // The location of uji
//     const uji = { lat: 34.89044, lng: 135.80325 };
//     // The map, centered at uji
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 16,
//         center: uji,
//     });
//     // The marker, positioned at uji
//     const marker = new google.maps.Marker({
//         position: uji,
//         map: map,
//     });
// }

// window.initMap = initMap;