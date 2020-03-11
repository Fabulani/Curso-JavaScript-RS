// Exercise 02 - 
// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.
// <input type="text" name="user">
// <button onclick="">Adicionar</button>
// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
// <ul>
//  <li>repo1</li>
//  <li>repo2</li>
//  <li>repo3</li>
//  <li>repo4</li>
//  <li>repo5</li>
// </ul>

// Exercise 03 -
// A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// <li>Carregando...</li>
// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.


var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listElement = document.querySelector("#app ul");
var repos = [];

buttonElement.onclick = searchGithub;

function searchGithub(){
    var username = inputElement.value;
    url = "https://api.github.com/users/" + username + "/repos";
    renderLoading();
    axios.get(url)
        .then(function(response) {
            renderRepos(response.data);
        })
        .catch(function(error) {
            renderError();
        });
}

function renderRepos(repos){
    listElement.innerHTML = '';

    for (repo of repos) {
        var repoElement = document.createElement("li");
        var repoText = document.createTextNode(repo.name);
        repoElement.appendChild(repoText);
        listElement.appendChild(repoElement);
    }
}

function renderLoading(){
    listElement.innerHTML = '';
    var loadElement = document.createElement("li");
    var loadText = document.createTextNode("Loading...");
    loadElement.appendChild(loadText);
    listElement.appendChild(loadElement);
}

function renderError(){
    listElement.innerHTML = '';
    var errorElement = document.createElement("li");
    var errorText = document.createTextNode("An error has occurred.");
    errorElement.style.color = "#F00";
    errorElement.appendChild(errorText);
    listElement.appendChild(errorElement);
}