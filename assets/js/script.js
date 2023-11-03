function pegarDatas() {
    var dataInicial = document.getElementById("dataInicial").value;
    var dataFinal = document.getElementById("dataFinal").value;

    if (dataInicial && dataFinal) {
        var dataInicial = new Date(dataInicial);
        var dataFinal = new Date(dataFinal);

        if (!isNaN(dataInicial.getTime()) && !isNaN(dataFinal.getTime())) {
            var diferencaEmMilissegundos = Math.abs(dataFinal - dataInicial);
            var dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
            var semanas = Math.floor(dias / 7);
            var meses = Math.floor(dias / 30);
            var anos = Math.floor(dias / 365);

            var resultadoElement = document.getElementById("area-calcular-periodo-resultado");
            resultadoElement.innerHTML = "<strong>Número de dias:</strong> " + dias
            + "<br><strong>Número de semanas:</strong> " + semanas
            + "<br><strong>Número de meses:</strong> " + meses
            + "<br><strong>Número de anos:</strong> " + anos;
        } else {
            var resultadoElement = document.getElementById("area-calcular-periodo-resultado");
            resultadoElement.innerHTML = "Datas inválidas!";
        }
    } else {
        var resultadoElement = document.getElementById("area-calcular-periodo-resultado");
        resultadoElement.innerHTML = "Preencha ambos os campos de data!";
    }
}