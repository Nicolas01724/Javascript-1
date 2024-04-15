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