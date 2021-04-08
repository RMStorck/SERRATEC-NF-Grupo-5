// var precoFinal = 0;
// var precisaTroco = false;

// var pedido = {
//     tamanho: "",
//     borda: "",
//     sabores: [],
//     bebida: ""
// };

// var pessoa = {
//     nome: "",
//     celular: ""
// };

// var endereco = {
//     rua: "",
//     numero: "",
//     complemento: "",
//     bairro: "",
//     pontoDeRef: ""
// };

// var formaDePagamento = [
//     "cartao de credito", "cartao de debito", "pix", "picpay", "dinheiro"
// ];

// function makeNameCapitalize(value){
//     var nomes = value.toLowerCase().split(' ');
//             for(var i = 0; i < nomes.length; i++){
//                 nomes[i] = nomes[i].charAt(0).toUpperCase() + nomes[i].substring(1);
//             }
//             return nomes.join(' ');
// }

// // if(document.getElementsByTagName("tamanhoPizza"))



var qtdDeSabores = parseInt(prompt("Quer quantos sabores? 2 ou 1"));
choose(qtdDeSabores);
function choose(qtd){
    if(qtd > 2 || qtd < 1){
        qtdDeSabores = parseInt(prompt("Digite a quantidade certa de sabores. 2 ou 1?"));
        choose(qtdDeSabores);
    } else{
        switch(quantidaDeSabores) {
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
                break;
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
                break;
        }
    }
}