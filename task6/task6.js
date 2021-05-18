let num = 0;
function randomNum() {
    num = Math.round(Math.random() * (101 - 1) + 1);
    return num;
}
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        randomNum();
        if (num % 2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 3000);
});

promise1
    .then((result) => {
        console.log("`Завершено успешно. Сгенерированное число — ", result);
    })
    .catch((error) => {
        console.log("Завершено с ошибкой. Сгенерированное число — ", error);
    });
