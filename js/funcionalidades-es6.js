const alunos = [
    {
        nome: 'Eliel',
        idade: 22
    },

    {
        nome: 'José',
        idade: 30
    },

    {
        nome: 'Adão',
        idade: 10
    },
]


const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.table(alunosFiltrados);

const alunoAdao = alunos.find((aluno) => aluno.nome = "Adão");
console.log(alunoAdao);

const alunoAdaoIndex = alunos.findIndex((aluno) => aluno.nome = "Adão");
console.log(alunoAdaoIndex);

// const idades = alunos.reduce((acc, aluno) => {
//     return acc + aluno.idade;
// }, 0);

const acimaDeNove = alunos.some(alunos => alunos.idade < 10);
const menorQueNoventa = alunos.every(alunos => alunos.idade < 90);

console.log(acimaDeNove);
console.log(menorQueNoventa);