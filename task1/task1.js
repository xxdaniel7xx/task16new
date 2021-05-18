const parser = new DOMParser();

const xmlString =
    `<list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


//XML nodes

const listNode = xmlDOM.querySelector('list');

//attributes

const result = {
    list : []
}

for (let i = 0; i < listNode.children.length; i++) {
    result.list.push({
        firstName: listNode.children[i].children[0].children[0].textContent,
        secondName: listNode.children[i].children[0].children[1].textContent,
        age: listNode.children[i].children[1].textContent,
        profession: listNode.children[i].children[2].textContent,
        lang: listNode.children[i].children[0].getAttribute('lang')
    })
}

console.log(result)