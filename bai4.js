function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
    this.toString = function () {
        return "loài" + this.name + "cân nặng" + this.weight + "kg";
    }
}

let objAnimal1 = new Animal("Elephant", "45.6");
console.log(objAnimal1.toString());
let objAnimal2 = new Animal("Mouse");
console.log(objAnimal2.toString());
