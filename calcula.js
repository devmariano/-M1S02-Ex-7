
let calcular = document.getElementById('start')
const div = document.getElementById("tabela")
calcular.onclick = function(){
    var preco = document.getElementById('preco').value
    var text = "<br>Panificadora Pão de Ontem - Tabela de preços<br>"
    preco = parseFloat(preco)
    for(var i=1; i<=50; i++){
        //console.log(i*preco)
        var resultado = parseFloat(i*preco).toFixed(2)
        text =  text+i+" - R$ "+resultado+"<br>"
        //console.log(text)
    }
    div.innerHTML = text;
    //console.log("entrou"+preco*2)

}
