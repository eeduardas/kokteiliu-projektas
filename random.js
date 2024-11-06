function getRandom(allDrinks) {
    let baseContainer = document.querySelector(".modal-content");
        let randomIndex = Math.floor(Math.random() * allDrinks.length);
        let selectedDrink = allDrinks[randomIndex];
        let html =
            `<div class="modalRecipeContent">
                <div class="modal-card">
                    <img src="${selectedDrink.strDrinkThumb}" alt="">
                    <div class="modal-card-descr">
                        <h4><b>${selectedDrink.strDrink}</b></h4>
                        <p><b>${selectedDrink.strCategory}</b></p>
                        <p>${getIngredients(selectedDrink)}</p>
                        <p>${selectedDrink.strInstructions}</p>
                    </div>
                </div>
            </div>`;

        baseContainer.innerHTML = html;
}
        