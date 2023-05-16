api_key = "a9416531306ab7444be40400827a9ef3" // todo: move it to env var

async function refresh() {
        
    cities = ["jerusalem", "london", "new york"];        

    for (i = 0; i < cities.length; i++){
        console.log(i)
        city = cities[i]
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        res = await fetch(url)        
        resJ = await res.json()        
        
        currentTemp = resJ.main.temp - 273.15;        
        currentTemp = currentTemp.toFixed(0);
        document.getElementById(city).innerHTML = currentTemp + "&#8451";                
    }
       
} 

function forcast(city) {        
    cnt = 2
    url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${api_key}`
    fetch(url)
    .then(res => res.json()
    .then(Jres => {
        console.log(Jres)      
    }))

}

function toggleTheme() {
    // change body.background based on cookie existence    

    if (getCookie("darkMode")) {
        // delete cookie
        document.cookie = "darkMode=";
        // swap to normal mode
        document.body.style.backgroundColor = "white";
      } else {
        // add cookie
        document.cookie = "darkMode=true";
        // swap to dark mode
        document.body.style.backgroundColor = "black";
      }        
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  

function setShowDark() {
    // show dark-mode toggle only on production
    // if (! window.location.href.includes("github.io")) {
    //     elem = document.getElementById("dark-mode")
    //     elem.style.visibility = "hidden"
    // } else {
        
        // double click for create cookie
        toggleTheme();
        toggleTheme();
    // }
}


function someFunc(id) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=Jerusalem&appid=${api_key}`
    fetch(url).then((res)=>{
        console.log(id)
    })
}