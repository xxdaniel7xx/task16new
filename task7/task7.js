const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${inp.value}/todos`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            if (data.length == 0) {
                alert("Пользователь с указанным id не найден");
            } else {
                data.forEach((element) => {
                    if (element.completed == true) {
                        res.append(document.createElement("li"));
                        res.lastChild.innerText = element.title;
                    } else {
                        res.append(document.createElement("li"));
                        res.lastChild.append(document.createElement("strike"));
                        res.lastChild.firstChild.innerText = element.title;
                    }
                });
            }
            return data;
        });
});
