function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries);
    const populationreduce=countries.reduce(function(accumulator,country){
return accumulator+country.population

    },0)
    console.log("Total Population of Countries:" + populationreduce)
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  
