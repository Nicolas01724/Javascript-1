function somarNumeros() {


    let soma = 0;
    let continuar = true;


    while (continuar) {

        let numero = parseFloat(prompt("Digite um numero ai:"));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor digite um numero valido.");
        }

        continuar = confirm("Deseja adicionar mais numeros?");
    }

    alert("A soma dos numero eh " + soma);
}

function nasa() {
    for (let i = 10; i > -1; i--) {
        
        if (i == 0) {
            alert("Contagem finalizada, lançamento iniciado!")
        } else {
        alert("Contagem regressiva: " + i);
        }
    }

}

function mawer() {
    let somaBruto = 0;
    let somaGasto = 0;

    for (let i = 1; i < 13; i++) {
        let bruto = parseFloat(prompt("Digite os ganhos do mês " + i + ":"));
        if (!isNaN(bruto)) {
            somaBruto += bruto;
            let gasto = parseFloat(prompt("Digite os gastos do mês " + i + ":"));
            if (!isNaN(gasto)) {
                somaGasto += gasto;
            } else {
                alert("Digite um número válido:");
                i -= 1;
            }
        } else {
            alert("Digite um número válido:");
            i -= 1;
        }
    }

    let liquido = somaBruto - somaGasto;
    alert("O ganho bruto desse ano foi de: " + somaBruto);
    alert("O gasto total desse ano foi de: " + somaGasto);
    alert("O saldo total desse foi de: " + liquido);

    if (liquido > 0) {
        alert("A empresa teve um lucro de: " + liquido);
    } else {
        alert("A empresa teve um prejuízo de: " + liquido * -1);
    }
}


function valoresDec() {
    const vet = []
    
    for (let i = 0; i < 4; i++) {
        vet.push(parseInt(prompt("Digite um numero:")));
    }

    vet.sort((a,b) => b - a);
    
    alert(vet);

}


function parImpar() {
    let continuar = true;

    while (continuar) {
        let numero = parseInt(prompt("Digite um número:"))

        if (numero != 0  && !isNaN(numero)) {
            if (numero % 2 == 0) {
                alert("Seu número " + numero + " é par, adicionamos 1 para se tornar impar, seu número ímpar é: " + (numero += 1));
            } else {
                alert("Seu número " + numero + " é ímpar, adicionamos 1 para se tornar par, seu número par é: " + (numero += 1));
            }
            
        } else {
            alert("Numero inválido, tente novamente!");
        }

        continuar = confirm("Você deseja continuar?")
    }
}

function vogalConsoante() {
    let letra = prompt("Digite uma letra");
    letra = letra.toLowerCase();

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert(letra + " é uma vogal");
    } else {
        alert(letra + " é uma consoante");
    }
}

function picole () {

    alert("[1] Chocolate")
    alert("[2] Morango")
    alert("[3] Creme")
    alert("[4] Manga")
    alert("[5] Melancia")
    alert("[6] Vanilla Ice")
    alert("[7] Céu Azul")
    alert("[8] Brownie")
    alert("[9] Hawaiano")
    
   let escolha = parseInt(prompt("Digite o número do sabor que você gostaria de ver o preço:"));

    switch (escolha) {
        case 1:
            alert("O picolé de chocolate custa R$1,50");
            break;

        case 2:
            alert("O picolé de morango custa R$2,50");
            break;
        
        case 3:
            alert("O picolé de creme custa R$2,50");
            break;

        case 4:
            alert("O picolé de manga custa R$3,50");
            break;
        
        case 5:
            alert("O picolé de melancia custa R$3,40");
            break;

        case 6:
            alert("O picolé de Vanilla Ice custa R$3,00");
            break;

        case 7:
            alert("O picolé de Céu Azul custa R$3,60");
            break;

        case 8:
            alert("O picolé de brownie custa R$4,00");
            break;

        case 9:
            alert("O picolé de hawaiano custa R$5,00");
            break;

        default:
            alert("Esse sabor não existe, tente novamente.");

    }

}