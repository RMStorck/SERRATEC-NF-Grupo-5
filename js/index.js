var nome = (prompt("Digite o seu nome:"));

alert(`Seja bem vindo a Serra Pizza!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);
var tamanho = inserirTamanho();
var tipoDeBorda = inserirBorda();
alert(`Pronto, ${nome}.Agora, vou te mostrar a lista de sabores:`);
alert(`- Calabresa: Mussarela, Calabresa e cebola\n
- 4 Queijos: Mussarela, Cheddar, Parmesão e Prato\n
- Frango com Catupiry :Mussarela, Frango e Catupiry\n
- Portuguesa: Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n
- Camarão: Mussarela, Camarão, Salsinha e Cebolinha\n
- Carne seca: Mussarela, Carne seca e cream cheese\n
- Lombo Canadense: Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n
- X-Fritas: Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`);

var quantidaDeSabores = escolherSabores(parseInt(prompt("Você quer uma pizza com 1 ou 2 sabores:")));

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