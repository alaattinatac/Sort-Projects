const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, , "75"];


function typeArr(item) {
    return `Type of  <${item}> is ${typeof item}!`
}

for (let i = 0; i < arrCase1.length; i++) {
    console.log(typeArr(arrCase1[i]));
}

for (let i = 0; i < arrCase2.length; i++) {
    console.log(typeArr(arrCase2[i]));
}


function handleFilter(arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(handleFilter(arrCase1));
console.log(handleFilter(arrCase2));

//let justNumber=arrCase1.filter(item=>typeof item==='number');
//console.log(justNumber);

function handleFilter2(arr) {
    let result2 = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            result2.push(arr[i]);
        }
    }
    return result2;
}
console.log(handleFilter2(arrCase1));
console.log(handleFilter2(arrCase2));

//let justNumber2=arrCase1.filter(item=>typeof item!=='number');
//console.log(justNumber2);

function handleSort(arr) {
    let result = handleFilter(arr)
    console.log(result.sort((a,b) => a-b));
    console.log(result.sort((a,b) => b-a));
  }
  handleSort(arrCase1);
  handleSort(arrCase2);