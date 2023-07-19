function fetchData() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
    const mealsListDiv = document.getElementById('gallery');

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const meals = data.meals;

        meals.forEach(meal => {
          const mealDiv = document.createElement('div');
          mealDiv.classList.add('col-sm-6', 'col-lg-3', 'gallary-item', 'wow', 'fadeIn')
          mealDiv.innerHTML = `
                                <img src="${meal.strMealThumb}" alt="recipe" class="gallary-img">
                                <div class="gallary-overlay">
                                    <p class="my-font">${meal.strMeal}</p>
                                    <p class="my-font"><i class="fa-solid fa-heart"></i> 5 likes</p>
                                </div>`;

                                mealDiv.addEventListener('click', () => {
                                    showPopup(meal);
                                  });

          mealsListDiv.appendChild(mealDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  function showPopup(meal) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupImage = document.getElementById('popupImage');
    const popupCategory = document.getElementById('popupCategory');
    const popupArea = document.getElementById('popupArea');
    const popupView = document.getElementById('popupView');
    const popupIngredients = document.getElementById('popupIngredients');
    const popupInstructions = document.getElementById('popupInstructions');

    popupTitle.textContent = meal.strMeal;
    popupImage.src = meal.strMealThumb;
    popupCategory.textContent = `Category: ${meal.strCategory}`;
    popupArea.textContent = `Area: ${meal.strArea}`;
    popupInstructions.textContent = `INSTRUCTIONS: ${meal.strInstructions}`;
    popupView.href = meal.strYoutube;
    popupIngredients.innerHTML = 'INGREDIENTS';

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
  
      if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = `${measure} ${ingredient}`;
        popupIngredients.appendChild(ingredientItem);
      }
    }

    popup.style.display = 'block';
    document.body.style.overflowY = 'hidden';
  }

  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

  function getIngredients(meal) {
    let ingredientsList = '';

    // Loop through the ingredient properties
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      // Check if the ingredient and measure exist and are not empty
      if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
        ingredientsList += `<li>${measure} ${ingredient}</li>`;
      }
    }

    return ingredientsList;
  }

  fetchData();