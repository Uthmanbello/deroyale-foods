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
                                    <div class="overlay-text">
                                        <p class="my-font">${meal.strMeal}</p>
                                        <p class="likes-container" data-meal-id="${meal.idMeal}">
                                            <i class="fa-solid fa-heart heart-icon"></i>
                                            <span class="likes-count my-font">0</span> <span class="my-font">likes</span>
                                        </p>
                                    </div>
                                    <button class="show-button my-font youtube">Show</button>
                                </div>`;

                                const showButton = mealDiv.querySelector('.show-button');
                                showButton.addEventListener('click', () => {
                                  showPopup(meal);
                                });

                                const likesContainer = mealDiv.querySelector('.likes-container');
                                const heartIcon = mealDiv.querySelector('.heart-icon');

                                function incrementLikes(mealId) {
                                    const likesCountElement = document.querySelector(`[data-meal-id="${mealId}"] .likes-count`);
                                    let likesCount = parseInt(likesCountElement.textContent, 10);
                                    likesCount++;
                                    likesCountElement.textContent = likesCount;
                                  }
                                
                                heartIcon.addEventListener('click', () => {
                                    heartIcon.classList.add('liked');
                                    const mealId = likesContainer.dataset.mealId;
                                    incrementLikes(mealId);

                                    setTimeout(() => {
                                        heartIcon.classList.remove('liked');
                                      }, 200);
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
    popupIngredients.innerHTML = 'INGREDIENTS:';

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

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '' && measure && measure.trim() !== '') {
        ingredientsList += `<li>${measure} ${ingredient}</li>`;
      }
    }

    return ingredientsList;
  }

  fetchData();
