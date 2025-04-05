var userIcon = L.icon({
    iconUrl: './user.png',  // Path to your custom image
    iconSize: [40, 40],         // Width, Height of the icon
    iconAnchor: [20, 40],       // Point of the icon that corresponds to marker location
    popupAnchor: [0, -40]       // Where the popup appears relative to the icon
});
var parkingIcon = L.icon({
    iconUrl: './icon/parking.png',  // Path to your custom image
    iconSize: [40, 40],         // Width, Height of the icon
    iconAnchor: [20, 40],       // Point of the icon that corresponds to marker location
    popupAnchor: [0, -40]       // Where the popup appears relative to the icon
});
var restaurantIcon = L.icon({
    iconUrl: './icon/restaurant.png',  // Path to your custom image
    iconSize: [40, 40],         // Width, Height of the icon
    iconAnchor: [20, 40],       // Point of the icon that corresponds to marker location
    popupAnchor: [0, -40]       // Where the popup appears relative to the icon
});
var hotelIcon = L.icon({
    iconUrl: './icon/hotel.png',  // Path to your custom image
    iconSize: [40, 40],         // Width, Height of the icon
    iconAnchor: [20, 40],       // Point of the icon that corresponds to marker location
    popupAnchor: [0, -40]       // Where the popup appears relative to the icon
});


// let currentPosition;
const map = L.map('map').setView([0,0],13)
let currentPosition;
let routingControl = null;
let currentPositionMarker;

navigator.geolocation.watchPosition(function(position){
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    currentPosition = [lat, lng];
    
    map.setView(currentPosition, 8);
    currentPositionMarker = L.marker(currentPosition, {icon:userIcon})
    .addTo(map).bindTooltip("hii").openTooltip();
   
    
},
function(error){
    alert("Please Enable Your Location")

},
{  
    enableHighAccuracy: true,
    maximumAge: 0, 
    timeout: 10000,
}
);
 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Hiii'
}).addTo(map);

// L.marker(hello).addTo(map).bindTooltip("hello").openTooltip();


///////////////////////////////////////////////////////////////////////////////////////////////
const controlContainer = document.querySelector(".controls-container");
const parkingSpotContainer = document.querySelector(".parking-spot-container");
const restaurantContainer = document.querySelector(".restaurant-container");
const hotelContainer = document.querySelector(".hotels-container");
const parkingName = document.querySelector(".parking-spot-list");
const parkingBookingSection = document.querySelector(".parking-booking-section")

let markerLayers;


const brightDark = document.querySelector(".bright-dark");

brightDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


function generateParkingList(){

  
    controlContainer.innerHTML="";
    parkingSpotContainer.style.display="flex"
    controlContainer.appendChild(parkingSpotContainer);
     controlContainer.style.display="flex"
     parkingBookingSection.style.display="none";
 
    

    // const parkingName = document.querySelector(".parking-spot-list");
    parkingName.innerHTML="";


    parkingList.forEach((parkingArea) => {
        const a = document.createElement("a");
        const div = document.createElement("div");
        const p = document.createElement("p");


        div.classList.add("shop-item");
        a.innerHTML = parkingArea.properties.name;
        a.href = "#";
        p.innerHTML = parkingArea.properties.address;

        div.appendChild(a);
        div.appendChild(p);
        parkingName.appendChild(div);


        div.addEventListener("click", ()=>{
             jumpTo(parkingArea);
        })


    })

//////////////////////////////////////////////////////////////////////////////////////////////////////

    function popUpMarker(feature){
        return`
         <div class="popup-container">
            <h2>${feature.properties.name}</h2>
            <img src="${feature.properties.image}" alt="">
            <p>${feature.properties.address}</p>
            <div class="contact-container">
                <div class="phone-no">
                   <a href="tel:${feature.properties.phone}">
                   <i class="bi bi-telephone"></i>${feature.properties.phone}</a>
                </div>
                <div class="contact-button">
                  <button class="popup-book" onclick='bookbtn(${JSON.stringify(feature)})'>Book</button>
                  <button class="popup-route" onclick="routeline(${feature.geometry.coordinates[0]},${feature.geometry.coordinates[1]})">Route</button>
                </div>
            </div>
            
         </div>
        
        `
    }
    
    
    function onEachFeature(feature, layer){
        layer.bindPopup(popUpMarker(feature),{closeButton: false})
    }
    
    if (markerLayers) {
        map.removeLayer(markerLayers);
    }

    markerLayers = L.geoJSON(parkingList, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        
        return L.marker(latlng,{icon:parkingIcon});
    }
});

markerLayers.addTo(map);
    
    
    // //////////////////////////////////////////////////////
    
    function jumpTo(parkingArea) {
        map.flyTo([parkingArea.geometry.coordinates[1], parkingArea.geometry.coordinates[0]], 13, {
            duration: 3
        });
    
        setTimeout(() => {
            L.popup({ closeButton: false , offset:L.point(0, -20)})
                .setLatLng([parkingArea.geometry.coordinates[1], parkingArea.geometry.coordinates[0]])
                .setContent(popUpMarker(parkingArea))
                .openOn(map);
        }, 2000);  // Adjust delay to match flyTo duration
    }
    



}


///////////////////////////////book button////////////////////

function bookbtn(feature){
    parkingName.innerHTML="";
    const a = document.createElement("a");
    a.innerHTML= feature.properties.name;
    parkingName.appendChild(a);
    parkingBookingSection.style.display="flex";
        
    
}




// ////////////Route Button////////////////////////////////

function routeline(destinationLon,destinationLat){

        if (!currentPosition) {
            alert("Current location not available yet!");
            return; // Prevent execution if currentPosition is undefined
        }


    if (markerLayers) {
        map.removeLayer(markerLayers);
    }
    L.marker(destinationLon,destinationLat);


    if (routingControl != null) {
        map.removeControl(routingControl);
    }
   
    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(currentPosition),
            L.latLng(destinationLat,destinationLon)
        ],
        routeWhileDragging: true,
        show:false,
    }).addTo(map);
 
}





/////////////////////////////////////restaurant feature //////////////////////////////////////////////////////

 const restaurantName = document.querySelector(".restaurant-list");
const finalPayContainer = document.querySelector(".final-pay-container");


function generateRestaurantList(){

    finalPayContainer.style.display="none"


    controlContainer.innerHTML="";
    restaurantContainer.style.display="flex";
    controlContainer.appendChild(restaurantContainer);
     controlContainer.style.display="flex"
    
   
    restaurantName.innerHTML="";
    
    restaurantList.forEach((restaurantArea) => {
        const a = document.createElement("a");
        const restaurantdiv = document.createElement("div");
        restaurantdiv.classList.add("restaurantdiv")
        const p = document.createElement("p");


        a.innerHTML = restaurantArea.properties.name;
        a.href = "#";
        p.innerHTML = restaurantArea.properties.address;
       

        restaurantdiv.appendChild(a);
        restaurantdiv.appendChild(p);
        restaurantName.appendChild(restaurantdiv); 
        
        
        restaurantdiv.addEventListener("click",()=>{
            jumpTo(restaurantArea);
        })

})
// //////////////////////////////////////////////////////////////////

function popUpMarker(feature){
    return`
        
        <div class="restaurant-popUp">
            <h2>${feature.properties.name}</h2>
            <img src="${feature.properties.image}" alt="">
            <p>${feature.properties.address}</p>
            <div class="contact-container">
                <div class="phone-no">
                   <a href="tel:${feature.properties.phone}">
                   <i class="bi bi-telephone"></i>${feature.properties.phone}</a>
                </div>
                <div class="contact-button">
                  <button class="popup-book" onclick='menuBtn(${JSON.stringify(feature)})'>Menu</button>
                  <button class="popup-route" onclick="routeline(${feature.geometry.coordinates[0]},${feature.geometry.coordinates[1]})">Route</button>
                </div>
            </div>
            
         </div>
    `
    
}


function onEachFeature(feature, layer){
    layer.bindPopup(popUpMarker(feature),{closeButton: false})
}

if (markerLayers) {
    map.removeLayer(markerLayers);
}

markerLayers = L.geoJSON((restaurantList),{
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, Latlng){
        return L.marker(Latlng,{icon:restaurantIcon});
    }
});

markerLayers.addTo(map);



function jumpTo(restaurantArea) {
        map.flyTo([restaurantArea.geometry.coordinates[1], restaurantArea.geometry.coordinates[0]], 13, {
            duration: 3
        });
    
        setTimeout(() => {
            L.popup({ closeButton: false , offset:L.point(0, -20)})
                .setLatLng([restaurantArea.geometry.coordinates[1], restaurantArea.geometry.coordinates[0]])
                .setContent(popUpMarker(restaurantArea))
                .openOn(map);
        }, 2000);  // Adjust delay to match flyTo duration
    }



    ///////////////////////////menu button

}

function menuBtn(feature){
    restaurantName.innerHTML= "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container")
    const a = document.createElement("a");
    a.innerHTML = feature.properties.name;

    menuContainer.appendChild(a)
    feature.properties.menu.forEach((menu) => {
        
        
        const menuNameContainer = document.createElement("div");
        menuNameContainer.classList.add("menuNameContainer");

        const menuImg = document.createElement("img");
        menuImg.classList.add("menu-img");

        const menuAndPrice = document.createElement("div");
        menuAndPrice.classList.add("menu-and-price");

        const menuTitle = document.createElement("p");
        const menuprice = document.createElement("p")
        menuTitle.classList.add("menu-title");

        const orderAddBtn = document.createElement("button");
        orderAddBtn.classList.add("orderAddBtn");
        orderAddBtn.textContent="Add";


       
        menuTitle.innerHTML = menu.name;
        menuprice.innerHTML =`₹${menu.price}`;

        menuImg.src = menu.image;

        menuAndPrice.appendChild(menuTitle);
        menuAndPrice.appendChild(menuprice);
        menuAndPrice.appendChild(orderAddBtn)

        menuNameContainer.appendChild(menuImg);
        menuNameContainer.appendChild(menuAndPrice);
        


        // const hlooo = document.createElement("div");
        // hlooo.classList.add("hii")
        // hlooo.appendChild(menuNameContainer)
        menuContainer.appendChild(menuNameContainer);






        orderAddBtn.addEventListener("click",() => {
            paymentContainer(menu);
        })

    });

    restaurantName.appendChild(menuContainer);


    function paymentContainer(menu){

          const menuContainer = document.querySelector(".menu-container");
          menuContainer.style.height="300px";
          finalPayContainer.style.display="flex";
          restaurantContainer.appendChild(finalPayContainer);


          const quantityButton = document.querySelector(".quantity-button");
          const quantityDisplay = document.querySelector(".quantity-display");
        //   const finalPayContainer= document.querySelector(".final-pay-container");
          let currentAmount = document.querySelector(".current-amount");
          let menuPay = document.querySelector(".menu-pay");


          let quantityNum = 1;
          quantityDisplay.textContent = quantityNum;


          currentAmount.textContent=`${menu.price}₹`


          finalPayContainer.addEventListener("click", event => {
              if(event.target.classList.contains("addition-button")){
                  quantityNum++;
                  quantityDisplay.textContent = quantityNum;
                  let totalAmount = quantityNum*menu.price;
                  currentAmount.textContent=`${totalAmount}₹`
        
        
              }
              else if(event.target.classList.contains("subtract-button") && quantityNum>0){
                  quantityNum--;
                  quantityDisplay.textContent = quantityNum;
                  let totalAmount = quantityNum*menu.price;
                  currentAmount.textContent=`${totalAmount}₹`

              }

    
              menuPay.addEventListener("click", ()=>{
                  const upiLink = `upi://pay?pa=7017685522@upi&pn=Abhishek&am=${totalAmount}&cu=INR`;
                  window.location.href = upiLink;
       
                  console.log(upiLink)
              })
          }) 




}

}


















///////////////////////////////// Hotels-List ///////////////////////////////////////////////////////
const hotelName = document.querySelector(".hotels-list");
const hotelBookSection = document.querySelector(".hotelBookSection");

function generateHotelList(){

    controlContainer.innerHTML="";
    hotelContainer.style.display="flex"
    controlContainer.appendChild(hotelContainer);
     controlContainer.style.display="flex";




    // const hotelName = document.querySelector(".hotels-list");
    hotelName.innerHTML="";

    hotelList.forEach((hotelArea) => {
        const a = document.createElement("a");
        a.href="#"
        const p = document.createElement("p");
        const div =document.createElement("div");

        a.innerHTML = hotelArea.properties.name;
        p.innerHTML = hotelArea.properties.address;

        div.appendChild(a);
        div.appendChild(p);
        hotelName.append(div);

        div.addEventListener("click",() => {
            jumpTo(hotelArea);
        });
    });





function popUpMarker(feature){
    return`
        <div class="hotel-popUp">
            <h2>${feature.properties.name}</h2>
            <img src="${feature.properties.image}" alt="">
            <p>${feature.properties.address}</p>
            <div class="contact-container">
                <div class="phone-no">
                   <a href="tel:${feature.properties.phone}">
                   <i class="bi bi-telephone"></i>${feature.properties.phone}</a>
                </div>
                <div class="contact-button">
                  <button class="popup-book" onclick='bookhotelbtn(${JSON.stringify(feature)})'>Book</button>
                  <button class="popup-route" onclick="routeline(${feature.geometry.coordinates[0]},${feature.geometry.coordinates[1]})">Route</button>
                </div>
            </div>
            
         </div>
            
        </div>
    `
    
}


function onEachFeature(feature, layer){

    layer.bindPopup(popUpMarker(feature),{closeButton: false})
}

if(markerLayers){
    map.removeLayer(markerLayers)
}

markerLayers = L.geoJSON((hotelList), {
    onEachFeature: onEachFeature,
    pointToLayer: function(feature, Latlng){
        return L.marker(Latlng, {icon: hotelIcon})
    }
});
markerLayers.addTo(map);


function jumpTo(hotelArea){
    map.flyTo([hotelArea.geometry.coordinates[1], hotelArea.geometry.coordinates[0]] , 13, {
        duration: 3
    });

    setTimeout(() => {
        L.popup({ closeButton: false , offset:L.point(0, -20)})
            .setLatLng([hotelArea.geometry.coordinates[1], hotelArea.geometry.coordinates[0]])
            .setContent(popUpMarker(hotelArea))
            .openOn(map);
    }, 2000);
}








}




function bookhotelbtn(feature){
    console.log("hello")
    hotelName.innerHTML="";
    hotelName.innerHTML=`
        <a>${feature.properties.name}</a>
    `;
    hotelBookSection.innerHTML=`
        <div class="hotel-booking-section">
        <div class="hotel-booking-detail">
            <div class="personal-detail-section">
                 <label for="name">Name</label>
                 <input type="text" name="name" placeholder="Enter Your Name">
                 <label for="mobile-number">Mobile Number</label>
                 <input type="text" id="mobile-number" name="mobile_number" required placeholder="Enter your mobile number">
                 <label for="Arriving-date">Arriving Day</label>
                 <input type="date" name="Arriving-date">
                 <label for="Departure-date">Departure Day</label>
                 <input type="date" name="Departure-date">
         </div>
     
             <div>
                <input type="radio" name="ac" value="ac">AC
                <input type="radio" name="non-ac" value="nonac">Non-AC
             </div>
             <div>
                <select name="" id="">
                    <option value="">Single Bedroom</option>
                    <option value="">Double Bedroom</option>
                    <option value="">Three Bedroom</option>
                </select>
             </div>
     
     
           
     
             <div class="price-info">
                 Total Price: ₹<span id="price">20</span>
             </div>
        </div>
        
     
             <button type="submit" class="pay-button">Pay</button>
     </div>
    
    `
    controlContainer.appendChild(hotelBookSection);
    
        
    
}


