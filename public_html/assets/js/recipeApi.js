// Function to fetch data from the API
function fetchData() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
    const mealsListDiv = document.getElementById('gallery');

    // Make the HTTP request using fetch()
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Process the JSON data here
        const meals = data.meals;

        // Loop through the meals array and display some information
        meals.forEach(meal => {
          const mealDiv = document.createElement('div');
          mealDiv.classList.add('col-sm-6', 'col-lg-3', 'gallary-item', 'wow', 'fadeIn')
          mealDiv.innerHTML = `
                                <img src="${meal.strMealThumb}" alt="recipe" class="gallary-img">
                                <a href="#" class="gallary-overlay">
                                    <p class="my-font">${meal.strMeal}</p>
                                    <p class="my-font"><i class="fa-solid fa-heart"></i> 5 likes</p>
                                </a>`;

          mealsListDiv.appendChild(mealDiv);
        });
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching data:', error);
      });
  }

  // Call the fetchData function to fetch and display the data
  fetchData();