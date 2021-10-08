
// function Student (name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function (){
//         return `안녕 나는 ${this.name}이야!`
//     }
// }
//
//
// const student1 = new Student('kim', 20);
// const student2 = new Student('Park', 21);
// const student3 = new Student('Lee', 22);
//
// console.log(student2.sayHi());


function Student(이름, 나이){
    this.name = 이름;
    this.age = 나이;
}

// Student.prototype.sayHi = () => {
//     console.log('안녕 나는 ' + this.name + '이야');
// }
// Student.prototype.sayHi = function () {
//     console.log('안녕 나는 ' + this.name + '이야');
// }
// var 학생1 = new Student('Kim', 20);
//
// 학생1.sayHi();

// var 부모 = { name : 'Kim' };
// var 자식 = {};
//
// 자식.__proto__ = 부모;
// console.log(자식.__proto__);





Array.prototype.remove3 = function (){
    // console.log(this);
    let result = null;

    result = this.findIndex(a => a==3)
    while(result != -1){
        this.splice(result, 1);
        result = this.findIndex(a => a==3);
    }

    return this;
}

arr = [1,2,3,3];
arr1 = [2,3,4,6,3];


console.log(arr.remove3());
console.log(arr1.remove3());
