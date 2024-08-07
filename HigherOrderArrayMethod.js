//Sum of square of Even Numbers

let numbers = [1,2,3,4,5]

let evennumbers = numbers.filter((num) => num%2 == 0)
let squareNumbers = evennumbers.map(evenNum => evenNum * 2)
let sum = squareNumbers.reduce((total,evenNum)=>total+evenNum,0)
// console.log(sum)

//calculate total sales

let products = [
    {name:'Apple',price:0.5,quantity:10},
    {name:'Banana',price:0.7,quantity:20},
    {name:'Orange',price:0.9,quantity:15}
]

function calculateTotalSales (products,taxRate){

    let totalSales = products.reduce((sum,product)=>sum+(product.price*product.quantity),0)

    let taxAmount = (totalSales * taxRate)/100;

    // console.log(taxAmount)
    let totalSaleWithTax = totalSales+taxAmount;

    console.log(parseFloat(totalSaleWithTax).toFixed(2))
}

calculateTotalSales(products,9)