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

document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    
    function generateCalendar(month, year) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
    
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
        const table = document.createElement("table");
        const header = document.createElement("thead");
        const body = document.createElement("tbody");
    
        const headerRow = document.createElement("tr");
        const prevButton = document.createElement("th");
        prevButton.textContent = "<";
        prevButton.addEventListener("click", function() {
            if (month === 0) {
                generateCalendar(11, year - 1);
            } else {
                generateCalendar(month - 1, year);
            }
        });
        const monthLabel = document.createElement("th");
        monthLabel.setAttribute("colspan", "5");
        monthLabel.textContent = monthNames[month] + " " + year;
        const nextButton = document.createElement("th");
        nextButton.textContent = ">";
        nextButton.addEventListener("click", function() {
            if (month === 11) {
                generateCalendar(0, year + 1);
            } else {
                generateCalendar(month + 1, year);
            }
        });
    
        headerRow.appendChild(prevButton);
        headerRow.appendChild(monthLabel);
        headerRow.appendChild(nextButton);
        header.appendChild(headerRow);
        table.appendChild(header);
    
        const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const daysRow = document.createElement("tr");
        dayNames.forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            daysRow.appendChild(th);
        });
        body.appendChild(daysRow);
    
        let currentDay = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");
                if (i === 0 && j < firstDay) {
                    cell.textContent = "-";
                } else if (currentDay > daysInMonth) {
                    cell.textContent = "-";
                } else {
                    cell.textContent = currentDay;
                    currentDay++;
                }
                row.appendChild(cell);
            }
            body.appendChild(row);
        }
        table.appendChild(body);
        calendar.innerHTML = "";
        calendar.appendChild(table);
    }

    const currentDate = new Date();
    generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});