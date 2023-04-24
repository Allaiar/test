const API_KEY = "https://rickandmortyapi.com/api/character";

function getMult() {
  fetch(API_KEY)
    .then((res) => res.json())
    .then((res) => showMults(res))
    .catch((error) => console.log(error));
}
getMult();

function getClassByRate(rate) {
  if (rate == "Dead") {
    return "red";
  } else if (rate == "Alive") {
    return "green";
  }
}

function showMults(data) {
  let elMults = document.querySelector(".cards");
  console.log(data);
  data.results.map((mult) => {
    let elMult = document.createElement("div");
    elMult.classList.add("movie");
    elMult.innerHTML = `
          <div class="card">
          <img class="img" src="${mult.image}" alt="">
                <div class="card-text">
                    <h1>${mult.name}</h1>
                    <div class="point">
                        <div class="mult__average mult__average--${getClassByRate(
                            mult.status
                          )}"></div>
                        <p>${mult.status}</p>
                        <p>${mult.species}</p>
                    </div>
                    <p>Last known location:</p>
                    <p></p>
                    <p>First seen in:</p>
                </div>
          </div>
          `;

    elMults.append(elMult);
    document.querySelector(".cards").append(elMult);

  });
}
showMults();

let gender = gender.filter(results => results.map == 'Human')
