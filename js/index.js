var nome = (prompt("Digite o seu nome:"));

alert(`Seja bem vindo a Serra Pizza!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);
var tamanho = (prompt(`Digite o numero referente ao tamanho da pizza que voce quer:\n
    1- Pequena (R$25,00)\n
    2- Media (R$30,00)\n
    3- Grande (R$40,00)\n
    4- Familia (R$45,00)`));
var tipoDeBorda = (prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
    1- Gorgonzola (R$10,00)\n
    2- Provolone (R$8,00)\n
    3- Catupiry (R$5,00)\n
    4- Cheddar (R$5,00)\n
    5- Sem borda (R$0,00)`));
alert(`Pronto, ${nome}.Agora, vou te mostrar a lista de sabores:`);
alert(`- Calabresa: Mussarela, Calabresa e cebola\n
- 4 Queijos: Mussarela, Cheddar, Parmesão e Prato\n
- Frango com Catupiry :Mussarela, Frango e Catupiry\n
- Portuguesa: Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n
- Camarão: Mussarela, Camarão, Salsinha e Cebolinha\n
- Carne seca: Mussarela, Carne seca e cream cheese\n
- Lombo Canadense: Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n
- X-Fritas: Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`);

var QuantidadeSabores = parseInt(prompt("Voce quer uma pizza com 1 ou 2 sabores:"));
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
if (QuantidadeSabores == 2) {
    var sabordOIS = prompt(`Digite o número do segundo sabor:
    Relembrando as opções:\n
        1- Calabresa\n
        2- 4 queijos\n
        3- Frango com Catupiry\n
        4- Portuguesa\n
        5- Camarão\n
        6- Carne Seca\n
        7- Lombo Canadense\n
        8- X-Fritas`);
}

var querBebida = prompt(`Você gostaria de uma bebida?`);
if (querBebida[0] == "S" || querBebida[0] == "s") {
    var tiposDeBebidas = (prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
    1- Coca-cola (R$12,00)\n
    2- Fanta (R$10,00)\n
    3- Guaraná (R$10,00)\n
    4- H2O (R$8,00)\n
    5- Del Vale (R$7,00)`));
}

var tipoDeEntrega = prompt(`Qual será a forma de entrega?\n 1- Balcão\n 2- Delivery`);
if (tipoDeEntrega == 2){
    var delivery = [
        celularDelivery = prompt(`${nome}, qual seu número de celular:`),
        rua = prompt(`Digite o nome da sua rua:`),
        bairro = prompt(`Digite o seu bairro:`),
        numero = prompt(`Qual o número da sua residência:`),
        complemento = prompt(`Digite o complemento:\n Caso aja, caso não, deixe dê enter`),
        pontoDeReferencia = prompt(`Digite um ponto de referência:`)
    ]
}else{
    celularBalcao = prompt(`${nome}, qual seu número de celular:`);
}

var formaDePagamento = prompt(`Escolha a foma de pagamento: \n
1- Cartão Crédito
2- Cartão Débito
3- Pix
4- Picpay
5- Dinheiro`);

if(tipoDeEntrega == 2 && formaDePagamento == 5){

    var precisaDeTroco = prompt(`Precisa de Troco?`);

    if (precisaDeTroco[0] == "S" || precisaDeTroco[0] == "s") {
        var troco = (prompt(`Quanto precisará de troco:`));
    }
}