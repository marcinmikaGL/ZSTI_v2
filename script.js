url = "https://imiki.pl/dane.json";

fetch(url)
    .then(response => { return response.text();
    })
    .then(fileContent => {
       dane(JSON.parse(fileContent));
  
    })
    .catch(error => {
        console.error('błąd json:', error);
    });




function dane(d) {
    f = document.getElementById("a0");
    k = Object.keys(d).map(function(key) {
      return { key: key, value: d[key] };
    });
    for (let i = 0; i < Object.keys(d).length; i++) {
      if (typeof k[i].value.punkty == "object") {
        z = k[i].value.punkty.p0 + "-" + k[i].value.punkty.p1;
      } else {
        z = k[i].value.punkty;
      }
      f.innerHTML +=
        "<option onclick='wywolaj("+i+")' value='p" + i + "'>" +
        k[i].value.pozycja +
        " [" +
        z +
        "]</option>";
    }


  }

  function wywolaj(c){
    w = document.getElementById("wypluwacz");
    if (typeof k[c].value.punkty == "object") {
    w.innerHTML = k[c].value.punkty.p0 + "-" +  k[c].value.punkty.p1;
    
  } else {
    w.innerHTML = k[c].value.punkty;
  }
}