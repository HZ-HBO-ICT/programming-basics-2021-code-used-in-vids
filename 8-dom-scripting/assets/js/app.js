window.addEventListener('load', init);

function init() {
    //1 get all the list items
    const listItems = document.getElementsByTagName('li');
    console.table(listItems);
    // const lastItemFromListItems = listItems[listItems.length-1].innerText;
    const lastItemFromListItems = document.getElementById('groceryList').lastChild.innerText;
    console.log(lastItemFromListItems);

    const ulList = document.getElementById('groceryList');
    console.log(ulList);

    //1 get 1 listitem
    const listItem = document.querySelector('.item1');
    console.log(listItem.innerHTML);

    //geeft het item een andere inhoud en stijl
    listItem.classList.add('standOut');

    //1. plek in de DOM
    const ph = document.getElementById('groceryList');
    //2 creeer het element.
    const newListItem = document.createElement('li');
    newListItem.innerText = 'Krop Sla';
    //3. voeg het element in op zijn plek in de DOM
    ph.appendChild(newListItem);
    
    // const ph = document.getElementById('groceryList');
    // ph.removeChild(ph.firstChild);

}

const groceries = [{
        'name': 'Tandenborstel',
        'price': 2.99
    },
    {
        'name': 'Deodorant',
        'price': 3.99
    },
    {
        'name': 'Bakmeel',
        'price': 0.79
    },
    {
        'name': 'Wortels',
        'price': 0.99
    }
];

const getTotalPrice = function(){
    let total = 0;
    let price = groceries.forEach(function(element, index, array){
        total += element.price;
    });
    //use reduce ipv foreach
    let priceReduce = groceries.reduce(function(total, value){
       return total + value.price;
    }, 0);
    return total;
}

console.log(getTotalPrice())

function createGroceryTable(elem){
    let groceryTable = document.createElement('table');
    groceries.forEach(function(element, index, array){
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        tdName.innerText = element.name;
        let tdPrice = document.createElement('td');
        tdPrice.innerText = element.price;
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        // console.log(tr);
        groceryTable.appendChild(tr);
    });
    let tr = document.createElement('tr');
    let tdTotal = document.createElement('td');
    tdTotal.innerText = 'Totaal';
    let tdTotalPrice = document.createElement('td');
    tdTotalPrice.innerText = getTotalPrice();
    tr.appendChild(tdTotal);
    tr.appendChild(tdTotalPrice);
    groceryTable.appendChild(tr);
    elem.appendChild(groceryTable);
}

createGroceryTable(document.getElementById('container'));