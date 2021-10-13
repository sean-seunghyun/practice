class Dog {
    type = '';
    color = '';
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    한살먹기(){
        console.log('error!');
    }
}
class Cat extends Dog{
  age = -1;
    constructor(type, color, age) {
        super(type, color);
        this.age = age;
    }
    한살먹기(){
        console.log(this.age+1);
    }
}


const dog1 = new Dog('말티즈', 'white');
const dog2 = new Dog('진돗개', 'brown');
const cat1 = new Cat('코숏', 'white', 5);
const cat2 = new Cat('러시안 블로', 'brown', 2);
// console.log(dog1, dog2);
// console.log(cat1, cat2);
//
cat1.한살먹기();
dog1.한살먹기();


class Unit{
    constructor() {
        this.hp = 100;
        this.power = 5;
    }
    get battlePoint () {
        return console.log(this.hp+this.power);
    }
    set heal (hp){
        this.hp += 50;
        console.log(this.hp);
    }

}

const monster = new Unit();
monster.battlePoint;
monster.heal = 50;


const data = {
    odd: [],
    even : [],

    setData(...number) {
        console.log(number);
        number.forEach(a => {
            if (a % 2 === 0) {
                this.even.push(a);
            } else {
                this.odd.push(a);
            }
        })
    },

    get getData(){
        this.odd.sort();
        this.even.sort();
        return this;
    }

}

data.setData(1,5,2,5,2,4,67,9,2,11);
console.log(data.getData);

