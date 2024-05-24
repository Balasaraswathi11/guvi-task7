function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries);
    
    countries.forEach(function(country){
        const details = {
            Name: country.name.common,
            Capital: country.capital,
            Flag: country.flags.png
        };
        console.log(details);
    });
}
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
