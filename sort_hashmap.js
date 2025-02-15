function sortHashMapByValue(map) {
  // Convert the map to an array of [key, value] pairs
  const entries = Object.entries(map);

  // Sort the array based on the values
  entries.sort((a, b) => a[1].localeCompare(b[1]));

  // Create a new object from the sorted array
  const sortedMap = Object.fromEntries(entries);

  return sortedMap;
}

// Test the function
const input = {
  101: "John Doe",
  102: "Jane Smith",
  103: "Peter Johnson"
};

const output = sortHashMapByValue(input);
console.log(output);