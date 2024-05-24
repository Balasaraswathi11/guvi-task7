function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries);
    const populationfilter=countries.filter(function(popu){if (popu.population<200000){return true}
return false})
console.log(populationfilter)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();


