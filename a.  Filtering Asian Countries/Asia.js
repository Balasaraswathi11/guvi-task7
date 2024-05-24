function reqListener() {
    const  countries=JSON.parse(this.responseText)
    console.log(countries)
    const asiancountry=countries.filter(function(country){return country.region==="Asia"
    })
    console.log(asiancountry)
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  