const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'e', 'f', 'g', 'h', 'i'];


async function fetchCocktailsInOrder() {

    const allDrinks = [];

    for (let i = 0; i < abc.length; i++) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${abc[i]}`);
        const data = await response.json();
        
        if (data.drinks) {
            allDrinks.push(...data.drinks);
        }
    }
    return allDrinks;
}

fetchCocktailsInOrder().then(allDrinks =>{
    console.log(allDrinks);
    generateHTML(allDrinks);
    getRandom(allDrinks);
    generateCategoriesHtml(allDrinks);
});




// Prisideti antra fetch is kurio gausime kategorija pagal turimus ID.
// Tai bus galim atlikti prie linko pabaigos pridejus id su ${}, link - https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// Reikia prideti filtravima pagal pavadinima, alkoholio tipa ir kategorija su select
// Korteles viduje arba jai apsivertus prideti recepta, aprasyma ir ingredientus
// Kol neuzvedi ant gerimo jis buna pilkas
 
    


