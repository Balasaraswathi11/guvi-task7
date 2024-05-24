function reqListener() {
    const countries=JSON.parse(this.responseText)
    console.log(countries);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://www.example.org/example.txt");
  req.send();
  
