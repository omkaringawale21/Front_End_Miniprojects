// Send request to API and generate response from JSON to JavaScript

const ipDisplay = document.querySelector('.ip-display');
const locationDiaplay = document.querySelector('.location-diaplay');
const geoLocationDiaplay = document.querySelector('.geo-location-diaplay');
const loader = document.querySelector('.container');
const loader1 = document.querySelector('.loader1');
const loader2 = document.querySelector('.loader2');
const loader3 = document.querySelector('.loader3');
const btn  = document.querySelector('.btn');

loader.style.display = "none";
loader1.style.display = "none";
loader2.style.display = "none";
loader3.style.display = "none";

btn.addEventListener('click', () => {
    loader.style.display = "flex";
    loader1.style.display = "flex";
    loader2.style.display = "flex";
    loader3.style.display = "flex";
    axios.get("https://ipapi.co/json/").then(response=> {
        // console.log(response);
        loader.style.display = "none";
        loader1.style.display = "none";
        loader2.style.display = "none";
        loader3.style.display = "none";
        ipDisplay.textContent = `IP Address :- ${response.data.ip}`;
        locationDiaplay.textContent = `Location Diaplay :- ${response.data.city} , ${response.data.region} , ${response.data.country_name}`;
        geoLocationDiaplay.textContent = `Geo Location :- ${response.data.latitude}, ${response.data.longitude}`;
    });
});