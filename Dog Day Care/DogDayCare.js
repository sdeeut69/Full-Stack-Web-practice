class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }
    incrementBehavior() {
        this._behavior ++;
    }
}

const Maggie = new Dog('Maggie');
console.log(Maggie.name);
console.log(Maggie.behavior);

Maggie.incrementBehavior();
console.log(Maggie.name);
console.log(Maggie.behavior);

Maggie.incrementBehavior();
console.log(Maggie.name);
console.log(Maggie.behavior);
