import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/scrape", async (req, res) => {
    const keyword = req.query.keyword;
    
    //Palavra-chave não fornecida
    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required" });
    }

    try {
        //Monta a URL de pesquisa
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

        //Faz a requisição e retorna o HTMdwdwL da página
        const { data } = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        //Usa o JSDOM para carregar o HTML da página
        const dom = new JSDOM(data);
        const document = dom.window.document;


        //Seleciona os produtos baseado no padrão de nome de classes da amazon
        let products = [];
        document.querySelectorAll(".s-main-slot .s-result-item").forEach(item => {
            const title = item.querySelector(".a-size-medium span")?.textContent || "N/A";
            const rating = item.querySelector(".a-icon-star-small")?.textContent || "N/A";
            const reviews = item.querySelector(".a-size-small .a-size-base")?.textContent || "0";
            const image = item.querySelector(".s-image")?.src || "";

            products.push({ title, rating, reviews, image });
        });

        //Retorna os dados como JSON
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to scrape Amazon" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));