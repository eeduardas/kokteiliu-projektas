fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then ((resp) => resp.json())
    .then ((data) => {
        show(data);
        show(data.drinks[0].strDrinkThumb);
        generateHTML(data);
    });


// Prisideti antra fetch is kurio gausime kategorija pagal turimus ID.
// Tai bus galim atlikti prie linko pabaigos pridejus id su ${}, link - https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// Reikia prideti filtravima pagal pavadinima, alkoholio tipa ir kategorija su select
// Korteles viduje arba jai apsivertus prideti recepta, aprasyma ir ingredientus
// Kol neuzvedi ant gerimo jis buna pilkas
 
    





