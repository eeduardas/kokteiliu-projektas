const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'e', 'f', 'g', 'h', 'i'];


// async function fetchCocktailsInOrder() {

//     const allDrinks = [];

//     for (let i = 0; i < abc.length; i++) {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${abc[i]}`);
//         const data = await response.json();
        
//         if (data.drinks) {
//             allDrinks.push(...data.drinks);
//         }
//     }
//     return allDrinks;
// }

async function fetchCocktailsInOrder() {
    const allDrinks = [];
    const fetchPromises = abc.map(letter =>
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(response => response.json())
    );

    const results = await Promise.all(fetchPromises);

    results.forEach(data => {
        if (data.drinks) {
            allDrinks.push(...data.drinks);
        }
    });

    return allDrinks;
}

function updateAll () {
fetchCocktailsInOrder().then(allDrinks =>{
    console.log(allDrinks);
    generateHTML(allDrinks);
    getRandom(allDrinks);
    generateCategoriesHtml(allDrinks);
});
}

updateAll();



// paieska tik ivedus raide, be paspaudimo search
// banner su menesio gerimu
// 
    


