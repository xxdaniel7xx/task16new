
function ask () {
    let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
    let date = new Date().toISOString().substring(0, 16)
    localStorage.setItem('name', name);
    localStorage.setItem('date', date);
}

function hello() {
    alert(`Добрый день, ${localStorage.getItem('name')}! Давно не виделись. В последний раз вы были у нас ${localStorage.getItem('date')}`)
    let date = new Date().toISOString().substring(0, 16);
    localStorage.removeItem('date');
    localStorage.setItem('date', date);
}
console.log(localStorage.length)
if (localStorage.length !== 0) {
    hello()
} else {
    ask()

}