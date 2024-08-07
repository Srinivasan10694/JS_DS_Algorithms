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

// Palindrome Check

function isPalindrome (str){
    let formattedStr = str.toLowerCase().split('').reverse().join('')
    if(str===formattedStr){
        console.log("Palindrome")
    }else {
        console.log("Not a Palindrome")
    }
}

// isPalindrome('racecars')

// Removing duplicates in an array

function removeDuplicates(arr){
    let uniqueArr = []
    for(let i = 0; i < arr.length; i++){
        if((!uniqueArr.includes(arr[i]))){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}
let array = [1,2,3,5,2,8,1,2,8]
// removeDuplicates(array)

let ansArray = new Set(array)
// console.log(ansArray)

//Finding secondLargest Number in an array

function secondLargest(arr){
    let firstMax = arr[0];
    let secondMax = arr[1];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }else if(arr[i]<firstMax && arr[i]>secondMax){
            secondMax = arr[i]
        }
    }
    console.log(secondMax)
}

let values = [23,1,55,12,456,86,456]

// secondLargest(values)

const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
  ];

  let sortedUers = users.sort((a,b) => a.age - b.age)
//   console.log(sortedUers)

  function twoSum(arr,target){
    let sumArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]+arr[i+1] == target){
            sumArr.push(i,i+1)
        }
    }
    console.log(sumArr)
}

let sumArr = [1,2,4,5]
// twoSum(arr,9)

function longestSubstring (str){
    let str1 = str.split('')
    console.log(str1)

}

longestSubstring('abcabcbb')