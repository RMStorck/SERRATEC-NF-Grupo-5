var precoFinal = 0;
var precisaTroco = false;

var pedido = {
    tamanho: "",
    borda: "",
    sabores: [],
    bebida: ""
};

var pessoa = {
    nome: "",
    celular: ""
};

var endereco = {
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    pontoDeRef: ""
};

var formaDePagamento = [
    "cartao de credito", "cartao de debito", "pix", "picpay", "dinheiro"
];

function makeNameCapitalize(value){
    var nomes = value.toLowerCase().split(' ');
            for(var i = 0; i < nomes.length; i++){
                nomes[i] = nomes[i].charAt(0).toUpperCase() + nomes[i].substring(1);
            }
            return nomes.join(' ');
}

// if(document.getElementsByTagName("tamanhoPizza"))