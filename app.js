const API_KEY = "https://rickandmortyapi.com/api/character";

getMult();
function getMult() {
  fetch(API_KEY)
    .then((res) => res.json())
    .then((res) => showMults(res))
    .catch((error) => console.log(error));
}

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
  data.results
    .filter((mult) => mult.gender === "Male")
    .map((mult) => {
      let elMult = document.createElement("div");
      elMult.classList.add("card");
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
                    <div>${mult.gender}</div>
                </div>
          </div>
          `;

      elMults.append(elMult);
      document.querySelector(".cards").append(elMult);
    });
}
