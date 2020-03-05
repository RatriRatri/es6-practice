class Parent {
    constructor() {
        this.fatherName = "raghav";
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;

    }
}
const baby = new Child("sinin");
const baby2 = new Child("tim");
console.log(baby.getFullName());
console.log(baby2.getFullName());