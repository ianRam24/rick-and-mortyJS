function randomPage() {
  return Math.ceil(Math.random() * 42);
}
async function fetchCharacters() {
  try {
    const url = `https://rickandmortyapi.com/api/character/?page=${randomPage()}`;
    const response = await fetch(url);
    const data = await response.json();
    renderCharacters(data);
  } catch (error) {
    console.error(error);
  }
}
fetchCharacters();

function renderCharacters(data) {
  data.results.map((results) => {
    const container = document.getElementById('container');
    container.innerHTML += `
                  <div class="card">
                <figure><img src="${results.image}" alt=${results.name}></figure>
                  <div class="card-text">
                    <p>Name: <span>${results.name}</span></p>
                    <p>Location: <span>${results.location.name}</span></p>
                    <p>Specie: <span>${results.species} </span></p>
                    <p>Status: <span>${results.status} </span></p>
                  </div>
                </div>
                `;
  });
}
