import "./styles.css";

const page = document.getElementById("page");
const limit = document.getElementById("limit");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

for (let k = 0; k < localStorage.i; k++) {
    localStorage.getItem(k);
    res.append(document.createElement("li"));
    res.lastChild.append(document.createElement("img"));
    res.lastChild.firstChild.setAttribute("src", localStorage.getItem(k));
}

btn.addEventListener("click", () => {
    if (
        (page.value < 1 || page.value > 10 || isFinite(page.value) == false) &&
        (limit.value < 1 || limit.value > 10 || isFinite(limit.value) == false)
    ) {
        alert("Номер страницы и лимит вне диапазона от 1 до 10");
    } else if (
        page.value < 1 ||
        page.value > 10 ||
        isFinite(page.value) == false
    ) {
        alert("Номер страницы вне диапазона от 1 до 10");
    } else if (
        limit.value < 1 ||
        limit.value > 10 ||
        isFinite(limit.value) == false
    ) {
        alert("Номер страницы вне диапазона от 1 до 10");
    } else {
        fetch(
            `https://picsum.photos/v2/list?page=${page.value}&limit=${limit.value}`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let i = 0;
                data.forEach((element) => {
                    res.append(document.createElement("li"));
                    res.lastChild.append(document.createElement("img"));
                    res.lastChild.firstChild.setAttribute("src", element.url);
                    i += 1;
                    localStorage.setItem(i, element.url);
                });
                localStorage.setItem("i", i);
                // localStorage.removeItem('res')
                console.log(localStorage);
                return data;
            });
    }
});
// localStorage.clear()