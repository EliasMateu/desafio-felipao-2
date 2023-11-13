//Mensagem de boas vindas para o usuario
    function welcomePlayer(name) {
    return `Olá honrável ${name}, bem-vindo de volta à taberna!\nComo você mencionou que gostaria de ver o teu RANK então Vamos lá.`;
}
//função para calcular a quantidade de partidas jogadas
function calculateWins(victory, defeats) {
    let result = victory - defeats;
    return result;
}
//função para ver em qual rank o usuario está
function determineRank(totalWins) {
    let nivel = "";
    if (totalWins < 10) {
        nivel = "Ferro";
    } else if (totalWins >= 11 && totalWins <= 20) {
        nivel = "Bronze";
    } else if (totalWins >= 21 && totalWins <= 51) {
        nivel = "Prata";
    } else if (totalWins >= 51 && totalWins <= 80) {
        nivel = "Ouro";
    } else if (totalWins >= 81 && totalWins <= 90) {
        nivel = "Diamante";
    } else if (totalWins >= 91 && totalWins <= 100) {
        nivel = "Lendário";
    } else if (totalWins > 101) {
        nivel = "Imortal";
    } else {
        console.log('Erro');
    }
    return nivel;
}
//funão para exibir a mensagem final
function messageToHero(name, totalWins, nivel) {
    console.log(`O Herói ${name} tem de saldo de total ${totalWins} está no nível de ${nivel}`);
}

//Variaveis para passar as informações do usuario!
let namePlayer = "Elias";
let victorys = 101;
let defeats = 15;

//aqui a mensagem de boas vindas precisa de um nome e pra isso peguei a variavel namePlayer para receber o nome
let welcomeMessage = welcomePlayer(namePlayer);
console.log(welcomeMessage);

let totalWins = calculateWins(victorys, defeats);
console.log(`Você possui um total de ${totalWins} em partidas rankeadas`);

let rank = determineRank(totalWins);

let endMessage = messageToHero(namePlayer, totalWins, rank)
console.log(endMessage);