
//Sort hashmap by value.


function sortHashMapByValue(map) {
    let sortedEntries = Object.entries(map).sort((a, b) => a[1].localeCompare(b[1]));
    let sortedMap = Object.fromEntries(sortedEntries);
    return sortedMap;
}

let people = {
    101: "John Doe",
    102: "Jane Smith",
    103: "Peter Johnson"
};

console.log(people);
let sortedPeople = sortHashMapByValue(people);
console.log(sortedPeople);
