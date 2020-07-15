const products = [];
products[0] = 'tandenborstel';
products[1] = 'deodorant';
products[2] = 'bakmeel ';
products[3] = 'wortels';
products[4] = 'tandpasta';
products[5] = 'krop sla';
products[6] = 'maggi';
products[7] = 'croky chips';
products[8] = 'WC papier';
products[9] = 'shampoo';

// console.log(products.length);
console.log("JavaScript is working!");

let productList = [];

productList[0] = "Tooth brush";
productList[1] = "Crips";
productList[2] = "Deodorant";
productList[3] = "Tomato";
productList[4] = "Lettuce";
productList[5] = "Apples";

console.log(productList);

productList.push('Bananas');
let lastElement = productList.pop();
productList.splice(2, 2, "Pears", "Rice");

console.log(lastElement);

//1 forloop
products.forEach(element => {
    console.log(element);
});

console.log("JavaScript is working!");

let productList = [
  "Tooth brush",
  "Crips",
  "Deodorant",
  "Tomato",
  "Lettuce",
  "Apples"
];

// for (let i = 0; i < productList.length; i++) {
//   console.log(productList[i]);
// }

// productList.forEach(function(value, index, arr){
//   console.log(`using a foreach loop ${index}`, value);
// });

// map, filter and reduce
let newProductList = productList.map(function(value, index, arr) {
  return `Product ${index}: ${value}`;
});

console.log(newProductList);


// products.forEach(function(element){
//     console.log(element);
// });

// for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     console.log(element);
// }

const newProductsArray = products.map(function(element, index){
    newElement = `Product ${index+1}: ${element}`;
    return newElement;
});

console.table(newProductsArray);

const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];

const totalPrice = function(pricesArray){
    let sum = 0;
    for (let i = 0; i < pricesArray.length; i++) {
        // sum = 0 + 2.10
        // sum = 2.10 + 4.99
        // sum = 7.09 + 5.60
        sum += pricesArray[i];
    }
    return sum;
}

const averagePrice = function(totalAmount, sumAmount){
    return Math.floor((sumAmount / totalAmount)*100)/100;
}

const highestPrice = function(prices){
    let highest = 0;
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] > highest){
            highest = prices[i];
        }       
    }
    return highest;
}

const addNewElementsToArrayOnASpecificPosition = function(elements, oldArray){
    //let updatedArray = [];
    //option 1
    return [oldArray, ...elements];
}
// console.log(addNewElementsToArrayOnASpecificPosition([3.19, 2.14], productPrices));