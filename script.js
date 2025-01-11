//DOM ELM
const cardContainer = document.getElementById('card');

//FUNCTION
function getCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const newCards = response.data;

            newCards.forEach(card => {
                const title = card.title;
                const img = card.url;

            cardContainer.innerHTML += `
             <div class="col-lg-4 col-sm-6 col-12 p-2">
                <div class="card col bg-light p-3 mt-4 position-relative">
                <img class="pin" src="img/pin.svg" alt="pin">
                    <img src="${img}" alt="immagine API" class="img-fluid">
                    <p class="mt-2">${title}</p>
                </div>
             </div>
            `;
        });
    })
}

getCard()

//EVENT
function addZoomEvents() {
    const zoomableImages = document.querySelectorAll('.overlay');
    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('overlay');
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            e.target.classList.remove('overlay');
        }
    });
}

// Chiamata della funzione per ottenere le card
getCard();