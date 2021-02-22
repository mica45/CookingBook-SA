const MEALDB_API_URL = 'https://www.themealdb.com/api/json/v1/1/';

const searchBtn = document.getElementById('search-btn');
const searchText = document.getElementById('search-input')
const dropdownBtn = document.getElementById('dropdownMenuButton');
const mealList = document.getElementById('meal');
const mealRecipe = document.getElementById('meal-recipe');
const ingredList = document.getElementById('ingredList');
const ingredInfo = document.getElementById('ingred-info');
var recipeImage = document.getElementById('recipe-img').src;


function changeImage(a) {
    document.getElementById('recipe-img').src = a;
}

function selectSearchType(type) {
    var searchType = String(type);
    if (searchType == "byName") {
        searchText.placeholder = "search by Name"
        dropdownBtn.textContent = "by Name";
        console.log("byName has been triggered")
        // getMeal();
    } else if (searchType == "byIngred") {
        searchText.placeholder = "search by Ingredient"
        dropdownBtn.textContent = "by Ingred";
        console.log("byIngred has been triggered")
        // getMealList();
    } else if (searchType == "byRand") {
        searchText.placeholder = "search by Random"
        dropdownBtn.textContent = "by Rand";
        console.log("byRand has been triggered")
        // getMealList();

    } else {
        console.log("error");
    }

}

function searchType() {
    if (searchText.placeholder == "search by Name") {
        getRecipe();
    } else if (searchText.placeholder == "search by Ingredient") {
        getMealList()
    }

}



// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                    changeImage(meal.strMealThumb);
                });

                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

// get meal list that matches with the name
function getMeal() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
                    changeImage(meal.strMealThumb);
                });


                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

function getRecipe() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInputTxt)
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });

    const createMeal = meal => {
        const ingredients = [];

        // Get all ingredients from the object. Up to 20
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            } else {
                // Stop if there are no more ingredients
                break;
            }
        }

        const newInnerHTML = `
                <div class="row">
                    <div class="columns five">
                        <img src="${meal.strMealThumb}" alt="Meal Image">
                        ${
                            meal.strCategory
                                ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
                                : ''
                        }
                        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                        ${
                            meal.strTags
                                ? `<p><strong>Tags:</strong> ${meal.strTags
                                        .split(',')
                                        .join(', ')}</p>`
                                : ''
                        }
                        <h5>Ingredients:</h5>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="columns seven">
                        <h4>${meal.strMeal}</h4>
                        <p>${meal.strInstructions}</p>
                    </div>
                </div>
                ${
                    meal.strYoutube
                        ? `
                <div class="row">
                    <h5>Video Recipe</h5>
                    <div class="videoWrapper">
                        <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                        </iframe>
                    </div>
                </div>`
                        : ''
                }
            `;

        mealRecipe.innerHTML = newInnerHTML;
    };

};

function getRandRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });

    const createMeal = meal => {
        const ingredients = [];

        // Get all ingredients from the object. Up to 20
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            } else {
                // Stop if there are no more ingredients
                break;
            }
        }

        const newInnerHTML = `
                <div class="row">
                    <div class="columns five">
                        <img src="${meal.strMealThumb}" alt="Meal Image">
                        ${
                            meal.strCategory
                                ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
                                : ''
                        }
                        ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
                        ${
                            meal.strTags
                                ? `<p><strong>Tags:</strong> ${meal.strTags
                                        .split(',')
                                        .join(', ')}</p>`
                                : ''
                        }
                        <h5>Ingredients:</h5>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="columns seven">
                        <h4>${meal.strMeal}</h4>
                        <p>${meal.strInstructions}</p>
                    </div>
                </div>
                ${
                    meal.strYoutube
                        ? `
                <div class="row">
                    <h5>Video Recipe</h5>
                    <div class="videoWrapper">
                        <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                        </iframe>
                    </div>
                </div>`
                        : ''
                }
            `;

        mealRecipe.innerHTML = newInnerHTML;
    };

};

// get meal Ingredient List
function getIngredientList() {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <li class="list-group-item" name="${meal.strIngredient}" id="${meal.strIngredient}-item"  onclick="getIngredInfo('${meal.strIngredient}')">${meal.strIngredient}</li>
                `;

                });

                ingredList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any Ingredients!";
                ingredList.classList.add('notFound');
            }

            ingredList.innerHTML = html;
        });
}

function getIngredInfo(name) {
    var ingred = document.getElementById(name + "-item");
    var name = ingred.name;
    var desc = ingred.desc;
    console.log("name: " + name);
    console.log("desc: " + desc);
    let html = "";
    html += `
                    <img src="https://www.themealdb.com/images/ingredients/${ingred.name}.png" alt="Ingredient Image">
                    <h4>${ingred.name}</h4>
                    <p>${ingred.desc}</p>
            `;
    ingredInfo.innerHTML = html;
}