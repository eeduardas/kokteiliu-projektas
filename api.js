const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

async function fetchCocktailsInOrder() {
    for (let i = 0; i < abc.length; i++) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${abc[i]}`);
        const data = await response.json();
                show(data);
        show(data.drinks ? data.drinks[0].strDrinkThumb : "No image available");
        generateHTML(data);
        generateCategorySelection (data);
    }
}

fetchCocktailsInOrder();








// Prisideti antra fetch is kurio gausime kategorija pagal turimus ID.
// Tai bus galim atlikti prie linko pabaigos pridejus id su ${}, link - https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// Reikia prideti filtravima pagal pavadinima, alkoholio tipa ir kategorija su select
// Korteles viduje arba jai apsivertus prideti recepta, aprasyma ir ingredientus
// Kol neuzvedi ant gerimo jis buna pilkas
 
    


