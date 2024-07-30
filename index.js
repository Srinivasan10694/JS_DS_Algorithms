// Finding maximum in an array

function findMax(arr){
    let max = arr[0]
for (let i = 0; i < arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)
}
let ans = [9,3,5,14,8,2]
// findMax(ans)

//Finding total sum of arrays

function findSum(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
let arr = [9,3,5,1,8]
// findSum(arr)

// Finding number of characters in the string

function stringChar (str){
let str1 = str.toLowerCase().split('').sort().join('')
console.log(str1)
let counter = 1
for (let i = 0; i < str1.length; i++){
    if(str1[i]==str1[i+1]){
        counter++
    }else{
        console.log(str1[i]+" "+counter)
        counter = 1
    }
}
}

// stringChar('Java')

