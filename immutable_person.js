class ImmutablePerson {
  constructor(name, id, dateOfJoining, addresses) {
    this._name = name;
    this._id = id;
    this._dateOfJoining = new Date(dateOfJoining);
    this._addresses = [...addresses]; // Create a shallow copy
    Object.freeze(this);
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get dateOfJoining() {
    return new Date(this._dateOfJoining);
  }

  get addresses() {
    return [...this._addresses]; // Return a new copy to prevent modification
  }
}

// Test the class
const person = new ImmutablePerson(
  "John Doe",
  "123",
  "2023-01-01",
  [{ street: "123 Main St", city: "Anytown" }]
);

console.log(person.name);
console.log(person.id);
console.log(person.dateOfJoining);
console.log(person.addresses);

// Attempt to modify (will fail silently in non-strict mode)
person.name = "Jane Doe";
console.log(person.name); // Still "John Doe"