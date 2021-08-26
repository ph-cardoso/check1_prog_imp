// Aula 09 - 26/08/2021
// Grupo 1: Pedro Cardoso, Lelia Salles, Luiz Henrique, Mario Braga e Paulo Rossi

// Função de execução do microondas
function microondas(opcao, tempo){
    const opcaoMinusculo = opcao.toLowerCase() // Variável que transforma todos os caracteres da string para letras minúsculas
    // Switch das opções do microondas
    switch(opcaoMinusculo){
        // Caso da Pipoca
        case "pipoca":
            // Se o tempo >= Padrão E <= ao dobro do padrão
            if (tempo >= 10 && tempo <= 10 * 2) 
                return "Prato pronto, bom apetite 😋";
            // Se o tempo > dobro do padrão E < triplo do padrão
            else if (tempo > 10 * 2 && tempo < 10 * 3)
                return "A comida queimou 😢";
            // Se o tempo >= triplo
            else if (tempo >= 10 * 3)
                return "Kabumm 💣";
            // Se o tempo < padrão
            else if (tempo < 10) 
                return "Tempo insuficiente ⏳";
        // Caso da Macarrão
        case "macarrao":
            // Se o tempo >= Padrão E <= ao dobro do padrão
            if (tempo >= 8 && tempo <= 8 * 2) 
                return "Prato pronto, bom apetite 😋";
            // Se o tempo > dobro do padrão E < triplo do padrão
            else if (tempo > 8 * 2 && tempo < 8 * 3)
                return "A comida queimou 😢";
            // Se o tempo >= triplo
            else if (tempo >= 8 * 3)
                return "Kabumm 💣";
            // Se o tempo < padrão
            else if (tempo < 8) 
                return "Tempo insuficiente ⏳";
        // Caso da carne
        case "carne":
            // Se o tempo >= Padrão E <= ao dobro do padrão
            if (tempo >= 15 && tempo <= 15 * 2) 
                return "Prato pronto, bom apetite 😋";
            // Se o tempo > dobro do padrão E < triplo do padrão
            else if (tempo > 15 * 2 && tempo < 15 * 3)
                return "A comida queimou 😢";
            // Se o tempo >= triplo
            else if (tempo >= 15 * 3)
                return "Kabumm 💣";
            // Se o tempo < padrão
            else if (tempo < 15) 
                return "Tempo insuficiente ⏳";
        // Caso do feijão        
        case "feijao":
            // Se o tempo >= Padrão E <= ao dobro do padrão
            if (tempo >=  12 && tempo <=  12 * 2) 
                return "Prato pronto, bom apetite 😋";
            // Se o tempo > dobro do padrão E < triplo do padrão
            else if (tempo >  12 * 2 && tempo <  12 * 3)
                return "A comida queimou 😢";
            // Se o tempo >= triplo
            else if (tempo >=  12 * 3)
                return "Kabumm 💣";
            // Se o tempo < padrão
            else if (tempo <  12) 
                return "Tempo insuficiente ⏳";
        // Caso do brigadeiro
        case "brigadeiro":
            // Se o tempo >= Padrão E <= ao dobro do padrão
            if (tempo >=  8 && tempo <=  8 * 2) 
                return "Prato pronto, bom apetite 😋";
            // Se o tempo > dobro do padrão E < triplo do padrão
            else if (tempo >  8 * 2 && tempo <  8 * 3)
                return "A comida queimou 😢";
            // Se o tempo >= triplo
            else if (tempo >=  8 * 3)
                return "Kabumm 💣";
            // Se o tempo < padrão
            else if (tempo <  8) 
                return "Tempo insuficiente ⏳";
        // Caso default (padrão)
        default:
            return "Prato inexistente 🤔";
    }
}

// Teste da função com 'pipoca'
console.log(microondas("pipoca", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Pipoca", 15)); // Expected: Prato pronto, bom apetite �
console.log(microondas("pipoca", 25)); // Expected: A comida queimou �
console.log(microondas("Pipoca", 30)); // Expected: Kabumm �

// Teste da função 'macarrão'
console.log();
console.log(microondas("macarrao", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Macarrao", 10)); // Expected: Expected: Prato pronto, bom apetite �
console.log(microondas("macarrao", 18)); // Expected: Expected: A comida queimou �
console.log(microondas("Macarrao", 25)); // Expected: Expected: Kabumm �

// Teste da função 'carne'
console.log();
console.log(microondas("carne", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Carne", 16)); // Expected: Prato pronto, bom apetite �
console.log(microondas("carne", 31)); // Expected: A comida queimou �
console.log(microondas("Carne", 46)); // Expected: Kabumm �

// Teste da função 'feijao'
console.log();
console.log(microondas("feijao", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Feijao", 13)); // Expected: Prato pronto, bom apetite �
console.log(microondas("feijao", 25)); // Expected: A comida queimou �
console.log(microondas("Feijao", 37)); // Expected: Kabumm �

// Teste da função 'brigadeiro'
console.log();
console.log(microondas("brigadeiro", 1)); // Expected: Tempo insuficiente ⏳
console.log(microondas("Brigadeiro", 9)); // Expected: Prato pronto, bom apetite �
console.log(microondas("brigadeiro", 17)); // Expected: A comida queimou �
console.log(microondas("Brigadeiro", 25)); // Expected: Kabumm �

// Teste do caso onde a opção não existe
console.log();
console.log(microondas("strogonoff", 15)); // Expected: Tempo insuficiente ⏳