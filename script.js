document.addEventListener("DOMContentLoaded", ()=> {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    const resultsDiv = document.getElementById("results");
    

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();


        if (query){
            //call the function to search products here
            searchProducts(query)
        } else {
            resultsDiv.innerHTML = '<p>Please eneter a search term</p>'
        }
    });

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter'){
            searchButton.click();
        }
    });
});



//function to simulate product search

function searchProducts(query){
    const productCards = document.getElementsByClassName("card");
    let results  = [];

    //filter the product based on the search results
    Array.from(productCards).forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        if (title.includes(query.toLowerCase())){
            results.push(card.cloneNode(true));
        }
    })

    displayResults(results);
}


//function display the serch results

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; //clear previous results

    if (results.length > 0) {
        results.forEach(result => {
            resultsDiv.appendChild(result)
            
            
        });
    } else {
        resultsDiv.innerHTML = '<p>No products found. </p>';
    }
}