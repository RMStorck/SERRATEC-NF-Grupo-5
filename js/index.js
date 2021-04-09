function chamarCodigo() {
    // document.getElementsByClassName("divbtn").style.display = 'none';
    let nome = prompt("Digite o seu nome:");
    alert(`Seja bem vindo a Five Pizzas!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);

    let tamanhos = [
        { descricao: 'Pequena', preco: 25 },
        { descricao: 'Media', preco: 30 },
        { descricao: 'Grande', preco: 40 },
        { descricao: 'Família', preco: 45 }
    ];
    let tamanhoEscolhido = inserirTamanho(tamanhos);

    let bordas = [
        { descricao: 'Gorgonzola', preco: 10 },
        { descricao: 'Provolone', preco: 8 },
        { descricao: 'Catupiry', preco: 5 },
        { descricao: 'Cheddar', preco: 5 },
        { descricao: 'Sem borda', preco: 0 }
    ];
    let tipoDeBorda = inserirBorda(bordas);

    alert(`Pronto, ${nome}. Agora, vou te mostrar a lista de sabores:`);
    let apresentarCardapio = cardapio();

    let quaisSabores = escolherSabores();

    let bebidas = tamanhos = [
        { descricao: 'Coca-cola', preco: 12 },
        { descricao: 'Fanta', preco: 10 },
        { descricao: 'Guaraná', preco: 10 },
        { descricao: 'H2O', preco: 8 },
        { descricao: 'Del Vale', preco: 7 },
        { descricao: 'Sem bebida', preco: 0 }
    ];

    let querBebida = escolherBebida(bebidas);

    let tipoDeEntrega = escolherEntrega(nome);

    let formaDePagamento = escolherPagamento(tipoDeEntrega);

    let totalPagar = tamanhoEscolhido.preco + tipoDeBorda.preco + querBebida.preco + tipoDeEntrega.preco;
    alert(`O valor total do seu pedido é ${totalPagar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`);

    let numeroRadom = Math.random() * 100000;
    let numeroDoPedido = numeroRadom.toFixed(0);
    let mostrarPedido = confirmarPedido(nome, numeroDoPedido, tamanhoEscolhido, tipoDeBorda, quaisSabores, querBebida, totalPagar, tipoDeEntrega, formaDePagamento);

    document.getElementById("textoFinal").innerHTML = mostrarPedido;
}