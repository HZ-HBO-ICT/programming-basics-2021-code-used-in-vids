window.addEventListener("load", init);

/**
 * Function to initialise the project. It waits until the full DOM is loaded
 */
function init() {
  // get the grocerlist ul
  const ulList = document.getElementById("groceryList");
  //const ulList = document.querySelectorAll("#groceryList");
  console.log("GroceryList", ulList);

  // get all the list items
  //const listItems = document.getElementsByTagName('li');
  const listItems = document.querySelectorAll("li");
  console.table(listItems);

  // get the contents of the last list item.
  // const lastItemFromListItems = listItems[listItems.length-1].innerText;
  const lastItemFromListItems = document.getElementById("groceryList").lastChild
    .innerText;
  console.log(lastItemFromListItems);

  // Exercises 1 get 1 listitem
  const listItem = document.querySelector(".item1");
  console.log(listItem.innerHTML);

  // add a new class
  listItem.classList.add("standOut");

  //1. find a place in the DOM to insert to
  const domReference = document.getElementById("groceryList");
  //2 create the element, add content and set the attributes
  const newListItem = document.createElement("li");
  newListItem.innerText = "Lettuce";
  //3. append the element to the placeholder.
  domReference.append(newListItem);

  addRecordsToTheDOM(document.getElementById('myRecords'));
}

const allMyRecords = [
  [
    "The Who - Pinball Wizard",
    "Rolling Stones - Exile on main street",
    "Police - Message in a bottle",
  ],
  ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"],
];

const allMyRecordsObjects = [
  {
    Artist: "The Who",
    Album: "Pinball Wizard",
    Language: "EN",
  },
  {
    Artist: "Rolling Stones",
    Album: "Exile on main street",
    Language: "EN",
  },
  {
    Artist: "Police",
    Album: "Message in a bottle",
    Language: "EN",
  },
  {
    Artist: "De Dijk",
    Album: "Alle 40 goed",
    Language: "NL",
  },
  {
    Artist: "Het Goede Doel",
    Album: "Belgie",
    Language: "NL",
  },
  {
    Artist: "Doe Maar",
    Album: "Skunk",
    Language: "NL",
  },
];

function addRecordsToTheDOM(elem) {
  const elements = [];
  allMyRecordsObjects.forEach((element) => {
    const records = document.createElement('div');

    const divArtist = document.createElement("div");
    divArtist.classList.add('artist');
    divArtist.innerText = element.Artist;
    
    const divAlbum = document.createElement("div");
    divAlbum.classList.add('album');
    divAlbum.innerText = element.Album;
    
    records.append(divArtist);
    records.append(divAlbum);
    elements.push(records);
    
    elem.append(...elements);
  });
}

// const groceries = [{
//         'name': 'Tooth brush',
//         'price': 2.99
//     },
//     {
//         'name': 'Deodorant',
//         'price': 3.99
//     },
//     {
//         'name': 'Baking soda',
//         'price': 0.79
//     },
//     {
//         'name': 'Carrots',
//         'price': 0.99
//     }
// ];

// /**
//  * Function to calculate a sum of prices
//  */
// const getTotalPrice = function(){
//     let total = 0;
//     let price = groceries.forEach(function(element, index, array){
//         total += element.price;
//     });
//     //use reduce ipv foreach
//     let priceReduce = groceries.reduce(function(total, value){
//        return total + value.price;
//     }, 0);
//     return total;
// }

// console.log(getTotalPrice())

// /**
//  * Function to create a DOM based on an array
//  * @param {*} elem - reference to an element in the DOM
//  */
// function createGroceryTable(elem){
//     let groceryTable = document.createElement('table');

//     groceries.forEach(function(element, index, array){
//         let tr = document.createElement('tr');
//         let tdName = document.createElement('td');
//         tdName.innerText = element.name;
//         let tdPrice = document.createElement('td');
//         tdPrice.innerText = element.price;
//         tr.appendChild(tdName);
//         tr.appendChild(tdPrice);
//         // console.log(tr);
//         groceryTable.appendChild(tr);
//     });
//     let tr = document.createElement('tr');
//     let tdTotal = document.createElement('td');
//     tdTotal.innerText = 'Totaal';
//     let tdTotalPrice = document.createElement('td');
//     tdTotalPrice.innerText = getTotalPrice();
//     tr.appendChild(tdTotal);
//     tr.appendChild(tdTotalPrice);
//     groceryTable.appendChild(tr);
//     elem.appendChild(groceryTable);
// }

// createGroceryTable(document.getElementById('container'));
