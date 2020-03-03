// Exercise 01 - return this: O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.


var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

console.log("O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua \"" + endereco.rua + "\" com nº " + endereco.numero + ".");



// Exercise 02 - Crie uma função que dado um intervalo (entre x e y) exiba todos número pares

function pares(x, y) {
    pairs = [];
    for (var i = x; i <= y; i++){
        if (i%2 == 0){
            pairs.push(i);
        }
    }
    return pairs;
}

console.log(pares(32, 321));



// Exercise 03 - Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    if (skills.indexOf("Javascript") != -1){
        return true;
    } else {
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false



// Exercise 04 - Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    if (anos >= 0 && anos <= 1){
        return "Iniciante";
    } else if (anos > 1 && anos <= 3){
        return "Intermediário";
    } else if (anos > 3 && anos <= 6){
        return "Avançado";
    } else if (anos >= 7){
        return "Jedi Master";
    }
}

var anosEstudo = 7;
console.log(experiencia(anosEstudo));
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master
   



// Exercise 05 - Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },

    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function userSkills(users){
    users_skills = []
    for (const user of users){
        users_skills.push("O " + user.nome + " possui as habilidades: " + user.habilidades.join(", "));
    }
    for (i in users_skills){
        console.log(users_skills[i]);
    }
    return;
}

userSkills(usuarios);