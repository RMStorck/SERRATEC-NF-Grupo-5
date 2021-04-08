function inserirTamanho() {
    let tamanho = [
        {descricao: 'pequena', preco: 25}, 
        {descricao: 'media', preco: 30}, 
        {descricao: 'grande', preco: 40}, 
        {descricao: 'familia', preco: 45}
    ];
    var solicitarTamanho = parseInt(prompt(`Digite o numero referente ao tamanho da pizza que voce quer:\n
    1- Pequena (R$25,00)\n
    2- Media (R$30,00)\n
    3- Grande (R$40,00)\n
    4- Familia (R$45,00)`));
    switch(solicitarTamanho) {
        case 1:
            return tamanho[0];
        case 2:
            return tamanho[1];
        case 3:
            return tamanho[2];
        case 4:
            return tamanho[3];
        default: 
            return tamanho[4];
    }
}
function inserirBorda() {
    let borda = [
        {descricao: 'gorgonzola', preco: 10}, 
        {descricao: 'provolone', preco: 8}, 
        {descricao: 'catupiry', preco: 5}, 
        {descricao: 'cheddar', preco: 5},
        {descricao: 'sem borda', preco: 0}
    ];
    var tipoDeBorda = prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
    1- Gorgonzola (R$10,00)\n
    2- Provolone (R$8,00)\n
    3- Catupiry (R$5,00)\n
    4- Cheddar (R$5,00)\n
    5- Sem borda (R$0,00)`);
    switch(tipoDeBorda) {
        case 1:
            return borda[0];
        case 2:
            return borda[1];
        case 3:
            return borda[2];
        case 4:
            return borda[3];
        default: 
            return borda[4];
    }
}
function escolherSabores() {
    var quantidadeDeSabores = parseInt(prompt(`Quantos sabores você quer?`));
    while(quantidadeDeSabores !=1 && quantidadeDeSabores !=2){
        quantidadeDeSabores = parseInt(prompt(`Por favor, insira a opção correta: 1 ou 2`));
    } 
    switch (quantidadeDeSabores) {
        case 1:
            var sabor = prompt(`Digite o número do sabor da pizza:\n
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
            return [sabor];
        case 2:
            var saborUm = prompt(`Digite o número do sabor da pizza:\n
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
            var saborDois = prompt(`Digite o número do segundo sabor:
                    Relembrando as opções:\n
                    1- Calabresa\n
                    2- 4 queijos\n
                    3- Frango com Catupiry\n
                    4- Portuguesa\n
                    5- Camarão\n
                    6- Carne Seca\n
                    7- Lombo Canadense\n
                    8- X-Fritas`);
            return [saborUm, saborDois];
    }
}
function escolherBebida(opcoes) {
    var querBebida = prompt(`Você gostaria de uma bebida?`);
    /*if (querBebida[0] == "S" || querBebida[0] == "s") {
        var tiposDeBebidas = (prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
        1- Coca-cola (R$12,00)\n
        2- Fanta (R$10,00)\n
        3- Guaraná (R$10,00)\n
        4- H2O (R$8,00)\n
        5- Del Vale (R$7,00)`));
        return tiposDeBebidas;
    }
    */
   return opcoes[i];

    return 0;
}
function escolherEntrega(entrega, nome) {
    if (entrega == 2){
        var delivery = [
            celularDelivery = prompt(`${nome}, qual seu número de celular:`),
            rua = prompt(`Insira o nome da sua rua:`),
            bairro = prompt(`Insira o seu bairro:`),
            numero = prompt(`Insira o número da sua residência?`),
            complemento = prompt(`Insira o complemento?`),
            pontoDeReferencia = prompt(`Insira um ponto de referência:`)
        ]
    }else{
        celularBalcao = prompt(`${nome}, qual seu número de celular:`);
    }
}
function escolherPagamento() {
    var tipoDeEntrega = prompt(`Escolha a foma de pagamento: \n
    1- Cartão Crédito
    2- Cartão Débito
    3- Pix
    4- Picpay
    5- Dinheiro`);
    
    if(tipoDeEntrega == 2 && formaDePagamento == 5){
    
        var precisaDeTroco = prompt(`Precisa de Troco?`);
    
        if (precisaDeTroco[0] == "S" || precisaDeTroco[0] == "s") {
            var troco = (prompt(`Troco para quanto?`));
        }
    }
}
function cardapio(){
   alert(`- Calabresa: Mussarela, Calabresa e cebola\n
        - 4 Queijos: Mussarela, Cheddar, Parmesão e Prato\n
        - Frango com Catupiry :Mussarela, Frango e Catupiry\n
        - Portuguesa: Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n
        - Camarão: Mussarela, Camarão, Salsinha e Cebolinha\n
        - Carne seca: Mussarela, Carne seca e cream cheese\n
        - Lombo Canadense: Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n
        - X-Fritas: Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`
    );
}
