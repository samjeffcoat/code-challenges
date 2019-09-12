function longestString(arr) {
    let result = ' ';
    for(let index = 0; index<arr.length; index++){
        let currentItem= arr[index];
        if(currentItem.length > result.length){
            result = arr[index];
        }
    }
    return result; 
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); 
const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string!'
