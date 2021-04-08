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

    var QuantidadeSabores=parseInt(prompt("Voce quer uma pizza com 1 ou 2 sabores:")); 
    var saborUm=prompt(`Digite o número do sabor da pizza:\n
    Relembrando as opções:\n
        1- Calabresa\n
        2- 4 queijos\n
        3- Frango com Catupiry\n
        4- Portuguesa\n
        5- Camarão\n
        6- Carne Seca\n
        7- Lombo Canadense\n
        8- X-Fritas`);   
    if(QuantidadeSabores==2){
    var sabordOIS=prompt(`Digite o número do segundo sabor:
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