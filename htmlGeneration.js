let html = '';

function getIngredients(data) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) { 
        let ingredient = data[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(`<p>${ingredient}</p>`);
        } else {
            break; 
        }
    }
    return ingredients.join(''); 
}

function generateHTML(data) {
    let baseContainer = document.querySelector(".cards-container");
    for (let i = 0; i < data.drinks.length; i++) {
        html += `
        <div class="flip-card">
            <div class="base-container">
                <div class="item-card">
                    <img src="${data.drinks[i].strDrinkThumb}" alt="">
                    <div class="container">
                        <h4><b>${data.drinks[i].strDrink}</b></h4>
                        <p>${data.drinks[i].strCategory}</p>
                    </div>
                </div>
                <div class="item-card-back">
                <p><b>Ingredients:</b></p>
                    ${getIngredients(data.drinks[i])}
                    <p><b>Recipe:</b></p>
                    <p>${data.drinks[i].strInstructions}</p>
                </div>
            </div>
        </div>
        `;
    }
    baseContainer.innerHTML = html;
}
