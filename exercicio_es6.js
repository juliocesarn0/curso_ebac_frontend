// Array de objetos com nome e nota dos alunos
const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "Carlos", nota: 5 },
  { nome: "Beatriz", nota: 8 },
  { nome: "Eduardo", nota: 4 },
  { nome: "Fernanda", nota: 6 },
];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function filtrarAprovados(lista) {
  return lista.filter((aluno) => aluno.nota >= 6);
}

// Test
const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
