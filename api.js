fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
    .then ((resp) => resp.json())
    .then ((data) => {
        show(data);
        show(data.drinks[0].strDrinkThumb);
    });