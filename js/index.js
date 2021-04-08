let nome = prompt("Digite o seu nome:");
alert(`Seja bem vindo a Serra Pizza!\n${nome}, por favor, pressione enter para inciar o seu pedido:`);
let tamanhos = [
    {descricao: 'pequena', preco: 25}, 
    {descricao: 'media', preco: 30}, 
    {descricao: 'grande', preco: 40}, 
    {descricao: 'familia', preco: 45}
];
let tamanhoEscolhido = inserirTamanho(tamanhos);
let bordas = [
    {descricao: 'gorgonzola', preco: 10}, 
    {descricao: 'provolone', preco: 8}, 
    {descricao: 'catupiry', preco: 5}, 
    {descricao: 'cheddar', preco: 5},
    {descricao: 'sem borda', preco: 0}
];
let tipoDeBorda = inserirBorda(bordas);
alert(`Pronto, ${nome}. Agora, vou te mostrar a lista de sabores:`);
let apresentarCardapio = cardapio();

let quaisSabores = escolherSabores();

let bebidas = tamanhos = [
    {descricao: 'coca-cola', preco: 12}, 
    {descricao: 'fanta', preco: 10}, 
    {descricao: 'guaraná', preco: 10}, 
    {descricao: 'h2o', preco: 8},
    {descricao: 'del vale', preco: 7},
    {descricao: 'sem bebida', preco: 0}
];

let querBebida = escolherBebida(bebidas);

let tipoDeEntrega = escolherEntrega(nome);

// let formaDePagamento = escolherEntrega(tipoDeEntrega)