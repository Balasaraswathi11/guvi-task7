function reqListener() {
    const  country=JSON.parse(this.responseText)
    console.log(country);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  