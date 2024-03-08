fetch("./data.json")
.then(response => response.json())
.then(myHikes => loadHike(myHikes));


function loadHike(myHikes) {
    let pageTitle = document.querySelector("title").textContent;
    let i=0;
    let found=false;
    while(found==false&&i<myHikes.hikes.length){
        if(myHikes.hikes[i].title!= pageTitle){
            i++;
        } else{
            found=true;
        }

    }
    let title = myHikes.hikes[i].title;
    let image = myHikes.hikes[i].image;
    let location = myHikes.hikes[i].location;
    let description = myHikes.hikes[i].description;
    let distance = myHikes.hikes[i].distance;
    let elevation = myHikes.hikes[i].elevation;
    let difficulty = myHikes.hikes[i].difficulty;
    let duration = myHikes.hikes[i].duration;
    
    let mainBody = document.getElementById("bod");
    mainBody.innerHTML =`
    <style>
      gmp-map {
        margin-left: auto;
        margin-right: auto;
        width: 99%;
        height: 400px;
      }
    </style>
    <div id=divPic>
        <img src="${image}" width="100%">
        <div id=divMap>
            <gmp-map center="${location}" zoom="11" map-id="DEMO_MAP_ID">
                <gmp-advanced-marker position="${location}" title="Lakeshore Trail"></gmp-advanced-marker>
            </gmp-map>
        </div>
    </div>
    <div id=divTitle>
        <h1><strong>${title}</strong></h1>
        <div id=divDescription>
            <ul>
                <li>Length of trail: ${distance} </li>
                <li>Elevation gain: ${elevation} </li>
                <li>Time spent: ${duration} </li>
                <li>Difficulty: ${difficulty} </li>
            </ul>
            <h3>About this Trail:</h3>
            <p id="trail">${description}</p>
        </div>
    </div>
    `;
}