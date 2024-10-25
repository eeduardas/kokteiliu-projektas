function generateHTML(data){
  let baseContainer = document.querySelector(".cards-container");
  let html = '';

  for (let i = 0; i < data.drinks.length; i++){
  html += `<div class="flip-card">
            <div class="base-container">
                <div class="item-card">
                    <img src=${data.drinks[i].strDrinkThumb} alt="">
                    <div class="container">
                        <h4><b>${data.drinks[i].strDrink}</b></h4>
                        <p>${data.drinks[i].idDrink}</p>
                    </div>
                </div>
                <div class="item-card-back">
                    <p>Ingredients</p>
                    <p>Recipe</p>
                </div>
            </div>
        </div>
  `
}
  baseContainer.innerHTML = html;
}

