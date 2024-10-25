function generateHTML(data){
  let baseContainer = document.querySelector(".base-container");
  let html = '';

  for (let i = 0; i < data.drinks.length; i++){
  html += `<div class="item-card">
        <img src=${data.drinks[i].strDrinkThumb} alt="" style="width:100%">
        <div class="container">
            <h4><b>${data.drinks[i].strDrink}</b></h4>
            <p>${data.drinks[i].idDrink}</p>
        </div>
    </div>
  `
}
  baseContainer.innerHTML = html;
}



