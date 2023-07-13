let locations = document.getElementById("location")
let dateArea = document.getElementById("date")
let matirx = document.getElementById("matrix")
let cel = document.getElementById("celceis")
let kelFre = document.getElementById("kel-fer")
let hem = document.getElementById("Humidity")
let winds = document.getElementById("winds")
let clouds = document.getElementById("clouds")
let feelLike = document.getElementById("feelLike")
let pressure = document.getElementById("pressure")
let matrixset = document.getElementById("matrixset")
let mains = document.getElementById("main")
const date = new Date()
let month = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let currentLoad = (city) => {
    navigator.geolocation.getCurrentPosition(location => {
        let lat = location.coords.latitude;
        let long = location.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c3938c744387bd29f7b465aa77a14564&units=metric`)
            .then(data => data.json())
            .then(data => {
                console.log(data.weather[0].icon)
                let fer_formula = ((data.main.temp) * 9 / 5) + 32
                let kel_formula = (data.main.temp) + 273.15
                let curntMonth = date.getMonth();
                let curntYear = date.getFullYear();
                let curntDate = date.getDate();
                let curntDay = date.getDay();
                locations.innerHTML = data.name;
                dateArea.innerHTML = `${month[curntMonth]} ${curntDate},${curntYear} <br> ${day[curntDay]}`
                matirx.innerHTML = data.weather[0].main;

                if (data.weather[0].icon == "01d" || data.weather[0].icon == "01n") {
                    // clear sky //
                    matrixset.src = "images/sun.svg"
                    mains.style.backgroundImage = `url(images/the-storm-is-near-wallpaper-preview.jpg)`
                }
                else if (data.weather[0].icon == "02d" || data.weather[0].icon == "02n") {
                    // few clouds //
                    matrixset.src = "images/few-clouds.svg"
                    mains.style.backgroundImage = `url(images/few-clouds-g.gif)`

                }
                else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
                    // cloudy //
                    matrixset.src = "images/cloudy.svg"
                    mains.style.backgroundImage = `url(images/broken-clouds.gif)`
                }
                else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
                    // broken clouds  //
                    matrixset.src = "images/extreme-clouds.svg"
                }
                else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
                    // snow rain//
                    matrixset.src = "images/extreme-snow-rain.svg"
                    mains.style.backgroundImage = `url(images/snow-rain-g.gif)`
                }
                else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
                    // rain//
                    matrixset.src = "images/extreme-rain.svg"
                    mains.style.backgroundImage = `url(images/rain-g.gif)`
                }
                else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n") {
                    // thunder strom rain//
                    matrixset.src = "images/thunderstorms-extreme-rain.svg"
                    mains.style.backgroundImage = `url(images/lightning-thunder.gif)`
                }
                else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n") {
                    // snow //
                    matrixset.src = "images/extreme-snow.svg"
                    mains.style.backgroundImage = `url(images/snow-g1.gif)`
                }
                else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
                    //  haze  //
                    matrixset.src = "images/haze.svg"
                    mains.style.backgroundImage = `url(images/haze.jpg)`
                } else {
                    matrixset.src = "images/cloudy.svg"
                    mains.style.backgroundImage = `url(images/broken-clouds.gif)`
                }

                cel.innerHTML = Math.round(data.main.temp) + "°c"
                kelFre.innerHTML = `${Math.round(fer_formula)}°f / ${Math.round(kel_formula)} °k`
                clouds.innerHTML = data.clouds.all + "%"
                winds.innerHTML = data.wind.speed + " Km/h"
                hem.innerHTML = data.main.humidity + "%"
                feelLike.innerHTML = Math.round(data.main.feels_like) + "°c"
                pressure.innerHTML = data.main.pressure + " mb"
            }).catch(err => {
                console.log(err)
                alert("please enter ther correct city")
            })
    })
}

currentLoad()
let cityScearh = document.getElementById("cityScearh")
let currentforcast = () => {
    if (cityScearh) {
        cityScearh = cityScearh
    } else {
        cityScearh = "karachi"
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityScearh.value}&appid=c3938c744387bd29f7b465aa77a14564&units=metric`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            let fer_formula = ((data.main.temp) * 9 / 5) + 32
            let kel_formula = (data.main.temp) + 273.15
            let curntMonth = date.getMonth();
            let curntYear = date.getFullYear();
            let curntDate = date.getDate();
            let curntDay = date.getDay();
            locations.innerHTML = data.name;
            dateArea.innerHTML = `${month[curntMonth]} ${curntDate},${curntYear} <br> ${day[curntDay]}`
            matirx.innerHTML = data.weather[0].main;

            if (data.weather[0].icon == "01d" || data.weather[0].icon == "01n") {
                // clear sky //
                matrixset.src = "images/sun.svg"
                mains.style.backgroundImage = `url(images/the-storm-is-near-wallpaper-preview.jpg)`
            }
            else if (data.weather[0].icon == "02d" || data.weather[0].icon == "02n") {
                // few clouds //
                matrixset.src = "images/few-clouds.svg"
                mains.style.backgroundImage = `url(images/few-clouds-g.gif)`

            }
            else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
                // cloudy //
                matrixset.src = "images/cloudy.svg"
                mains.style.backgroundImage = `url(images/broken-clouds.gif)`
            }
            else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
                // broken clouds  //
                matrixset.src = "images/extreme-clouds.svg"
            }
            else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
                // snow rain//
                matrixset.src = "images/extreme-snow-rain.svg"
                mains.style.backgroundImage = `url(images/snow-rain-g.gif)`
            }
            else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
                // rain//
                matrixset.src = "images/extreme-rain.svg"
                mains.style.backgroundImage = `url(images/rain-g.gif)`
            }
            else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n") {
                // thunder strom rain//
                matrixset.src = "images/thunderstorms-extreme-rain.svg"
                mains.style.backgroundImage = `url(images/lightning-thunder.gif)`
            }
            else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n") {
                // snow //
                matrixset.src = "images/extreme-snow.svg"
                mains.style.backgroundImage = `url(images/snow-g1.gif)`
            }
            else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
                //  haze  //
                matrixset.src = "images/haze.svg"
                mains.style.backgroundImage = `url(images/haze.jpg)`
            } else {
                matrixset.src = "images/cloudy.svg"
                mains.style.backgroundImage = `url(images/broken-clouds.gif)`
            }

            cel.innerHTML = Math.round(data.main.temp) + "°c"
            kelFre.innerHTML = `${Math.round(fer_formula)}°f / ${Math.round(kel_formula)} °k`
            clouds.innerHTML = data.clouds.all + "%"
            winds.innerHTML = data.wind.speed + " Km/h"
            hem.innerHTML = data.main.humidity + "%"
            feelLike.innerHTML = Math.round(data.main.feels_like) + "°c"
            pressure.innerHTML = data.main.pressure + " mb"
            cityScearh.value = "";
        }).catch(err => {
            console.log(err)
            swal.fire({
                icon: 'error',
                title: 'Unable to Fetch Current Location Data',
                text: 'Please enable your location',
                button: "OK"
            })

        })
    cityScearh.value = "";
}

let searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keydown", (city) => {
    if (event.keyCode == 13) {
            currentforcast()
            cityScearh.blur()
    }
})



let currentforcasts = () => {
    //  navigator.geolocation.getCurrentPosition(location => {
    //     let lats = location.coords.latitude;
    //     let longs = location.coords.longitude
    
    fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=24.8607&lon=67.0011&appid=c3938c744387bd29f7b465aa77a14564&units=metric`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            
        }).catch(err => {
            console.log(err)
            swal.fire({
                icon: 'error',
                title: 'Unable to Fetch Current Location Data',
                text: 'Please enable your location',
                button: "OK"
            })

        })
}
currentforcasts()