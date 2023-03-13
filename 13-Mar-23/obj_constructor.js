// Object constructor is used to create objects

// Constructor Function
function Student(name, rollno) {
	this.name = name;
	this.rollno = rollno;
}

const stu1 = new Student('shakeeb', 12);
const stu2 = new Student('tahir', 13);
const stu3 = new Student('aryan', 14);

console.table(stu1);
console.table(stu2);
console.table(stu3);