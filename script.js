// DOM ELEMENTS
const cardContainer = document.getElementById('card');
const closeBtn = document.getElementById('close-btn');
const overlayElm = document.getElementById('overlay');
const overlayImgElm = document.getElementById('overlay-img');

// FUNCTION
function getCard() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            const newCards = response.data;

            newCards.forEach(card => {
                const title = card.title;
                const img = card.url;

                cardContainer.innerHTML += `
                    <div class="col-lg-4 col-sm-6 col-12 p-2">
                        <div class="card bg-light p-3 mt-4 position-relative img-card">
                            <img class="pin" src="img/pin.svg" alt="pin">
                            <img src="${img}" alt="${title}" class="img-fluid">
                            <p class="mt-2">${title}</p>
                        </div>
                    </div>
                `;
            });

            const photoCards = document.querySelectorAll('.img-card');
            photoCards.forEach((photoCard) => {
                photoCard.addEventListener("click", () => {
                    const imgCardElm = photoCard.querySelector('.img-fluid');
                    const imgSrcElm = imgCardElm.src; 
                    overlayImgElm.src = imgSrcElm; 
                    overlayElm.classList.remove("hidden"); 
                });
            });
        })
}

const closeOverlay = () => {
    overlayElm.classList.add("hidden");
};

getCard();

// EVENT
closeBtn.addEventListener('click', closeOverlay);
