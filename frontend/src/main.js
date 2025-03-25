function scrapeAmazon() {
    const keyword = document.getElementById("keyword").value;
    if (!keyword) return alert("Please enter a keyword");

    // Cria uma nova instância de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configura o método e URL da requisição
    xhr.open("GET", `http://localhost:3000/api/scrape?keyword=${keyword}`, true);

    // Define o que fazer quando a requisição for completada
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Converte a resposta em JSON
            const data = JSON.parse(xhr.responseText);

            // Exibe os resultados na página
            const resultsContainer = document.querySelector(".results");
            resultsContainer.style.display = "flex";
            resultsContainer.innerHTML = data.map(product => `
                <div class="results__item">
                    <h3>${product.title}</h3>
                    <p>⭐ ${product.rating} | ${product.reviews} reviews</p>
                    <img src="${product.image}" width="100">
                </div>
            `).join("");
        } else {
            alert("Failed to retrieve products.");
        }
    };
    xhr.onerror = function() {
        alert("Request failed.");
    };

    // Envia a requisição
    xhr.send();
}