import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Olá, Mundo!"
    });
});

app.post("/user", (request, response) => {

    return response.json({
        message: "Usuário salvo com sucesso!"
    });

});


app.listen(3333), () => console.log("Server is ruinning on port 3333");