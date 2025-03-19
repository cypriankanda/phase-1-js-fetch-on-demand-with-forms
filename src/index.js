const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the page from refreshing
  
      // Get the input value
      const input = document.querySelector("input#searchByID");
  
      // Fetch movie details based on the entered ID
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          if (!response.ok) {
            // If the response is not OK, show an error message
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then((data) => {
          // Update the DOM with movie title and summary
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title; // Set the title
          summary.innerText = data.summary; // Set the summary
        })
        .catch((error) => {
          // Handle the error (if any, e.g., invalid ID)
          console.error(error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = 'Error: Movie not found'; // Display error message
          summary.innerText = ''; // Clear summary
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  