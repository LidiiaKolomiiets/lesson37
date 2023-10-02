const array = [2, 45, 8, 'hello', 78, 14, 'hello'];
let index = 0;

function removeElement(array, item) {
    while ((index = array.indexOf(item)) !== -1) {
        array.splice(index, 1);
    }
}

removeElement(array, 'hello');
console.log(array);

export default removeElement;
