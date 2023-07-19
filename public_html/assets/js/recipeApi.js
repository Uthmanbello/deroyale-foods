// Function to fetch data from the API
function fetchData() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    const mealsListDiv = document.getElementById('mealsList');

    // Make the HTTP request using fetch()
    fetch(apiUrl)
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Process the JSON data here
        const meals = data.meals;

        // Loop through the meals array and display some information
        meals.forEach(meal => {
          const mealDiv = document.createElement('div');
          mealDiv.innerHTML = `<h2>${meal.strMeal}</h2>
                               <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                               <p>Category: ${meal.strCategory}</p>
                               <p>Area: ${meal.strArea}</p>
                               <p>Instructions: ${meal.strInstructions}</p>`;

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