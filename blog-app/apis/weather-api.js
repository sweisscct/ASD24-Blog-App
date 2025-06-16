// const axios = require("axios");
import axios from "axios";


// axios makes requests, so it returns a promise

console.log(axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"));

// const res = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");

// console.log(res);

axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
.then(res => {
    console.log(res.data.latitude)
})
.catch(err => {
    console.log(err);
})
.finally();

// new Promise((resolve, reject) => {
//     throw Error("This is an error");
// })
// .then(console.log("then"))
// .catch(console.log("catch"))
// .finally(console.log("second finally"))

// https://geocoding-api.open-meteo.com/v1/search?name=Dublin&count=10&language=en&format=json




//  hourly=temperature_2m,rain,cloud_cover,soil_temperature_0cm"

async function getData() {
    const results = await axios.get("https://geocoding-api.open-meteo.com/v1/search?name=Dublin&count=10&language=en&format=json");
    console.log(results.data.results);
    // console.log(results.data.results[0].longitude);
    let longitude = results.data.results[0].longitude;
    let latitude = results.data.results[0].latitude;
    // console.log(results.data.results[0].latitude);
    let query = `latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover,soil_temperature_0cm`;
    const res = await axios.get("https://api.open-meteo.com/v1/forecast?" + query);

    console.log(res.data.latitude);
    console.log(res.data)
}



getData();

export default getData;

// module.exports = { getData }