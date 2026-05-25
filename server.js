const express = require("express");
const https = require("https");
const path = require('path');

const app = express()
const URL_API = 'https://rickandmortyapi.com/api/character';

//Busca personagens
function buscarPersonagens(callback) {
    https.get(URL_API, (resposta) => {
        let dados = '';
        resposta.on('data', parte => { dados+=parte});
        resposta.on('end', () => {
            const json = JSON.parse(dados);
            callback(json.results);
        });
    });
}

//GET PERSONAGENS
app.get('/personagens', (req, res) => {
    buscarPersonagens(personagens => {
        res.json(personagens)
    });
});

router.get('/:id', (req, res) => {   //Procura por id
    const id = Number(req.params.id);
    const personagens = readData();
    const personagem = consultas.find(a => a.id === id);

    if (!personagem) { //Verifica se existe o ID
        return res.status(404).json({
            erro: "consulta não encontrada",
            mensagem: "Não existe nenhuma consulta com esse Id"
        });
    };

    res.json(personagem);
});

//INICIA SERVIDOR
app.listen(3000, () =>{
    console.log('Servidor rodando em http://localhost:3000');
});