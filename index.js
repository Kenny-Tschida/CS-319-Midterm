fetch("./data.json")
.then(response => response.json())
.then(myHikes => loadHikes(myHikes));

function loadHikes(myHikes) {
    var cardHikes = document.getElementById("column");

    for (var i = 0; i < myHikes.hikes.length; i++) {
        let title = myHikes.hikes[i].title;
        let distance = myHikes.hikes[i].distance;
        let elevation = myHikes.hikes[i].elevation;
        let difficulty = myHikes.hikes[i].difficulty;
        let image = myHikes.hikes[i].image; // Note that all images pulled are from the internet and are compliant with copyright laws, all images were found under creative commons licenses
        let duration = myHikes.hikes[i].duration;
        let file = myHikes.hikes[i].file;
        let card = "card" + i.toString();

        let AddCardHike = document.createElement("div");
        AddCardHike.classList.add("column");

        AddCardHike.innerHTML = `
        <div id=${card} class="card shadow-sm">
            <img src=${image} width="500" height="300" class="card-img-top" alt="..."></img>
            <div id="lower" class="card-body">
                <a href="${file}" class="button"> <strong>${title}</strong></a>
                <div class="d-flex justify-content-between align-items-center">
                    <div>Difficulty: <br> ${difficulty}</div>
                    <div>Distance: <br> ${distance}</div>
                    <div>Elevation Gain: <br> ${elevation}</div>
                    <div>Time: <br> ${duration}</div>
                </div>
            </div>
        </div>
        `;
        cardHikes.appendChild(AddCardHike);
    }
}