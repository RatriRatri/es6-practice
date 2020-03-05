class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "kolimulnnesa school"
    }

}
const student1 = new Student(12, "shom");
const student2 = new Student(22, "foll");
const student3 = new Student(29, "bidda");
console.log(student1.name, student2.name, student3.name);