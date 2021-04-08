var nome = (prompt("Digite o seu nome:"));
alert(`Seja bem vindo a Serra Pizza!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);

var tamanho = inserirTamanho();
var tipoDeBorda = inserirBorda();

alert(`Pronto, ${nome}. Agora, vou te mostrar a lista de sabores:`);
cardapio();

var quantidaDeSabores = (parseInt(prompt("Você quer uma pizza com 1 ou 2 sabores:")));
escolherSabores(quantidaDeSabores);

var querBebida = prompt(`Você gostaria de uma bebida?`);
escolherBebida(querBebida);

var tipoDeEntrega = prompt(`Qual será a forma de entrega?\n 1- Balcão\n 2- Delivery`);
escolherEntrega(tipoDeEntrega, nome);

var formaDePagamento = escolherEntrega()