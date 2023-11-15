function searchLocation() {
  let message = `${nationalParksArray.length} National Park to visit</h1><br><br>`;
  // message += `Test`;

  message += nationalParksArray.map(parkTemplate).join("");

  document.getElementById("myParks").innerHTML = message;
}

function parkTemplate(park) {
  return `
        <div class="card" style="width: 18rem;">
        <img src="${park.Image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${park.LocationName}</h5>
            <p class="card-text">${park.State}.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
}
