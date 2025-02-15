//Design an immutable class with following attributes


class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        Object.freeze(this); 
    }
}

class ImmutablePerson {
    constructor(name, id, dateOfJoining, addresses) {
        this.name = name;
        this.id = id;
        this.dateOfJoining = new Date(dateOfJoining); 
        this.addresses = addresses.map(addr => new Address(addr.street, addr.city, addr.zip)); 
        Object.freeze(this); 
    }
}


let person = new ImmutablePerson("John Doe", "101", "2022-01-15", [
    { street: "123 Main St", city: "New York", zip: "10001" },
    { street: "456 Elm St", city: "Los Angeles", zip: "90001" }
]);

console.log(person);
