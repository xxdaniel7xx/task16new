const select = document.getElementById("select");
const btn = document.getElementById("btn");
const row = document.getElementById("row");
const graf = document.getElementById("graf");
btn.addEventListener("click", function () {
    fetch("src/text.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let i = 0;
            for (i; i < data.length; i++) {
                if (data[i].year == select.value) {
                    var obj = data[i];
                    row.childNodes[1].innerHTML = data[i].sales.q1;
                    row.childNodes[3].innerHTML = data[i].sales.q2;
                    row.childNodes[5].innerHTML = data[i].sales.q3;
                    row.childNodes[7].innerHTML = data[i].sales.q4;
                }
            }
            let url = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${obj.year} год',data:[${obj.sales.q1},${obj.sales.q2},${obj.sales.q3},${obj.sales.q4}]}]}}`;
            graf.setAttribute("href", url);
            return data;
        });
});

