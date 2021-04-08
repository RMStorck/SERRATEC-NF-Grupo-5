var nome = (prompt("Digite o seu nome:"));
    document.write(`Seja bem vindo a Serra Pizza! ${nome}, por favor, pressione enter para inciar o seu pedido:`);
    var tamanho = (prompt(`Digite o numero referente ao tamanho da pizza que voce quer:\n
    1- Pequena \n
    2- Media\n
    3- Grande\n
    4- Familia`));
    var tipoDeBorda = (prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
    1- Gorgonzola \n
    2- Provolone \n
    3- Catupiry\n
    4- Cheddar\n
    5- Sem borda`));
    document.write(`Pronto,`+nome+".Agora, vou te mostrar a lista de sabores:");
    document.write(`Calabresa: Mussarela, Calabresa e cebola\n
    4 Queijos: Mussarela, Cheddar, Parmesão e Prato\n
    Frango com Catupiry :Mussarela, Frango e Catupiry\n
    Portuguesa: Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n
    Camarão: Mussarela, Camarão, Salsinha e Cebolinha\n
    Carne seca: Mussarela, Carne seca e cream cheese\n
    Lombo Canadense: Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n
    X-Fritas: Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`);