function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries);
    const dollar = countries.filter((value)=> value.currencies && value.currencies.USD)
dollar.forEach((countriesWithUSD)=> console.log(countriesWithUSD.name.common))
}




    const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

