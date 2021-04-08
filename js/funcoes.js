function inserirTamanho() {
    var tamanho = (prompt(`Digite o numero referente ao tamanho da pizza que voce quer:\n
    1- Pequena (R$25,00)\n
    2- Media (R$30,00)\n
    3- Grande (R$40,00)\n
    4- Familia (R$45,00)`));
    return tamanho;
}
function inserirBorda() {
    var tipoDeBorda = (prompt(`Digite o numero referente ao tipo de borda que voce quer:\n
    1- Gorgonzola (R$10,00)\n
    2- Provolone (R$8,00)\n
    3- Catupiry (R$5,00)\n
    4- Cheddar (R$5,00)\n
    5- Sem borda (R$0,00)`));
    return tipoDeBorda;
}
function escolherSabores(quantidaDeSabores) {
    switch (quantidaDeSabores){
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
        default: prompt(`Por favor, insira novamente a quantidade de sabores: 1 ou 2.`);
    }
}
