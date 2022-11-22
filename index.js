const express = require("express");
const { response } = require("express");
const { uuid } = require("uuidv4"); //id unico

const app = express();
app.use(express.json());
const alunos = [];
const notas = [];
const provas = [];

//---------------------------------------Computadores---------------------------------------------//

app.get("/alunos", (request, response) => {
  return response.json(alunos);
}); //Visualizar
app.post("/alunos", (request, response) => {
  const { nome, idade, serie } = request.body;
  const matriculaindex = { id: uuid(), nome, idade, serie };
  alunos.push(matriculaindex);
  return response.status(201).json(matriculaindex);
}); //inserir
//put atualiza
app.put("/alunos/:id", (request, response) => {
  const { id } = request.params;
  const { nome, idade, serie } = request.body;
  const newAluno = { id, nome, idade, serie };
  const matriculaindex = alunos.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  alunos[matriculaindex] = newAlunos;
  return response.json(newAlunos);
});
//delete apaga
app.delete("/alunos/:id", (request, response) => {
  const { id } = request.params;
  const matriculaindex = alunos.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  alunos.splice(matriculaindex, 1);
  return response.status(204).send();
});

app.listen(8181, () => {
  console.log("O Servidor foi iniciado!");
});

///------------------notas-----------------------------------//

app.get("/notas", (request, response) => {
  return response.json(notas);
}); //Visualizar
app.post("/notas", (request, response) => {
  const { aulas, projetos, ferias } = request.body;
  const matriculaindex = { id: uuid(), aulas, projetos, ferias };
  notas.push(matriculaindex);
  return response.status(201).json(matriculaindex);
}); //inserir
//put atualiza
app.put("/notas/:id", (request, response) => {
  const { id } = request.params;
  const { aulas, projetos, ferias } = request.body;
  const newNotas = { id, aulas, projetos, ferias };
  const matriculaindex = notas.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  notas[matriculaindex] = newNotas;
  return response.json(newNotas);
});
//delete apaga
app.delete("/notas/:id", (request, response) => {
  const { id } = request.params;
  const matriculaindex = notas.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  notas.splice(matriculaindex, 1);
  return response.status(204).send();
});

//----------------------------------------------------provas--------------------//

app.get("/provas", (request, response) => {
  return response.json(provas);
}); //Visualizar
app.post("/provas", (request, response) => {
  const { Ibimestre, IIbimestre, IIIbimestre } = request.body;
  const matriculaindex = { id: uuid(), Ibimestre, IIbimestre, IIIbimestre };
  provas.push(matriculaindex);
  return response.status(201).json(matriculaindex);
}); //inserir
//put atualiza
app.put("/provas/:id", (request, response) => {
  const { id } = request.params;
  const { Ibimestre, IIbimestre, IIIbimestre } = request.body;
  const newprovas = { id, Ibimestre, IIbimestre, IIIbimestre };
  const matriculaindex = provas.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  provas[matriculaindex] = newprovas;
  return response.json(newprovas);
});
//delete apaga
app.delete("/provas/:id", (request, response) => {
  const { id } = request.params;
  const matriculaindex = provas.findIndex(
    (matriculaindex) => matriculaindex.id == id
  );
  provas.splice(matriculaindex, 1);
  return response.status(204).send();
});
