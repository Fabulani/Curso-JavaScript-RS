/* 
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch
*/

var input = document.querySelector("#app input");
var button = document.querySelector("#app button");

function checaIdade(idade) {
    // Retornar uma promise
}

// checaIdade(20)
//     .then(function() {
//     console.log("Maior que 18");
//     })
//     .catch(function() {
//     console.log("Menor que 18");
//     });
  


function checkAgePromise(){
    age = Number(input.value);
    if (isNaN(age) == false){
        return new Promise(function(resolve, reject){
            if (age >= 18){
                resolve('Maior de idade (' + age + ')');
            } else{
                reject('Menor de idade (' + age + ')');
            }
        });
    } else{
        console.log(age);
    }
}

checkAgePromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });

button.onclick = checkAgePromise();


