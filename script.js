//DOM ELM
const cardContainer = document.getElementById('card');

//FUNCION
function getCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const newCards = response.data;

            newCards.forEach(card => {
                const title = card.title;
                const img = card.url;

            cardContainer.innerHTML += `
             <div class="col-lg-4 col-sm-6 col-12 p-2">
                <div class="card col bg-light p-3 mt-4">
                    <img src="${img}" alt="immagine API" class="img-fluid">
                    <p class="mt-2">${title}</p>
                </div>
             </div>
            `;
        });
    })
}

getCard()

