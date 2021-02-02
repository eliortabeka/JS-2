const person = {
    first: 'John',
    last: 'Doe',
    age: '43',
    skill: ['css', 'js', 'html']
}
// person.pet = 'dog';
// delete person.age;
// Object.freeze(person);

// Loops
// only Keys
console.table(Object.keys(person));
// only Values
console.table(Object.values(person));
// Key & Value in array
console.table(Object.entries(person));

console.clear();

console.log(Object.entries(person));
console.log(person);

