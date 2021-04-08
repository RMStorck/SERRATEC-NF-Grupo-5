var nome = prompt("Digite o seu nome:");
alert(`Seja bem vindo a Serra Pizza!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);

var tamanho = inserirTamanho();
var tipoDeBorda = inserirBorda();

alert(`Pronto, ${nome}. Agora, vou te mostrar a lista de sabores:`);
cardapio();

var quantidaDeSabores = escolherSabores();

var querBebida = escolherBebida();

var tipoDeEntrega = prompt(`Qual será a forma de entrega?\n 1- Balcão\n 2- Delivery`);
escolherEntrega(tipoDeEntrega, nome);

var formaDePagamento = escolherEntrega()