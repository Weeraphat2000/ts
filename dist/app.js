"use strict";
console.log("Helllooooooooooo");
let u = 342;
const a = "123";
// เวลาสร้าง function ก็ต้องกำหนด type ให้มันด้วย
const total = (a, b) => {
    return a + b;
};
console.log(total(12, +"12"));
let b = true;
b = false;
let fname = "Weeraphat";
fname = "Yan";
console.log(b);
console.log(fname.toUpperCase());
console.log(`Weeraphat ${fname.toLowerCase()}`);
// type any คือ สามารถเปลี่ยน type ได้
console.log(" ");
console.log("any");
let any = "Wee";
console.log(typeof any);
any = 23;
console.log(typeof any);
any = true;
console.log(any);
any = [2, 4, 5];
console.log(any);
any = { a: "123" };
console.log(any);
const formatNumber = (a) => {
    return +a;
};
console.log(formatNumber("qwe"));
console.log(formatNumber(12));
const testObj = (a) => {
    console.log(a);
};
testObj({ a: "HUN" });
console.log(" ");
const f = (n) => {
    return n.toFixed(2);
};
let m = 2;
m = "123";
// console.log(typeof m); // type string
let mm = 2;
let mmm = 2;
// console.log(f(mmm)); // ถ้า type ตรงกันปกติก็ไม่มีอะไร
// console.log(f(m)); // unknow จะ error เวลา compile เวลาส่งเข้าไปที่ fn เมื่อ type ไม่ตรง
// console.log(f(mm)); // any จะไม่ error เวลา conpile เวลาส่งเข้าไปที่ fn เมื่อ type ไม่ตรง
// any จะไม่ตรวจสอบชนิดข้อมูล
// unknow จะตรวจสอบชนิดข้อมูล
// ถ้าจะประกาศ array เปล่าๆต้อง ประกาศแบบนี้ (ถ้าจะ log)
// const list = [] ทำได้แต่ต้อง ห้าม log [] เปล่าออกมาดู
console.log(" ");
console.log("unknow");
const list = new Array();
const list2 = [];
console.log(list);
list2.push(3, 4, 5, 6, 7, 8, 9);
console.log(list2);
// type unknow จะตรวจสอบ type ก่อนเริ่มทำงาน
let myVar = "Weera";
console.log(typeof myVar);
myVar = 2;
console.log(typeof myVar);
console.log("type assertion คือ การระบุชนิดข้อมูลด้วยตนเอง as, <ชนิดข้อมูล>");
let username;
username = "Weera";
// console.log(username.toLowerCase()) // แบบนี้ไม่ได้จะ error เพราะ type unknow มาร่วมกับ string
console.log(username.toUpperCase());
console.log(username.toUpperCase());
console.log(" ");
const test = "test"; // ถ้า type เป็น str อยู่แล้วก็ไม่เป็นอะไร
console.log(test.toUpperCase());
console.log(" ");
console.log("if else");
let amount = 3434;
if (amount > 50) {
    console.log(amount);
}
else {
    console.log("NOOOOOOOOO");
}
console.log(amount > 50 ? amount : "NOOOOOOOO");
console.log(" ");
console.log("loop");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
const users = ["hun", "1", "hunhunhun"];
const users1 = [2323, 10, 43];
const users2 = ["2323", 10, true];
for (let i in users) {
    // in จะเป็น index แบบ str
    console.log(i);
}
for (let i of users2) {
    // of จะเป็น value ข้อมูล index นั้นเป็น type อะไรก็ได้ type นั้นแหละ
    console.log(i);
}
console.log("forEach");
users2.forEach((item, index, array) => {
    console.log(item, index, array);
});
console.log(" ");
console.log("function");
const ff = (a1) => {
    console.log(a1.a);
    const { a } = a1;
    console.log(a);
};
//
//
const fff = ({ a, age }, // destructuring
[aa, bb, cc], arr, defaultParemeter = 100, a1) => {
    console.log(a);
    console.log(age);
    console.log(cc.toLowerCase());
    console.log(arr);
    console.log(defaultParemeter);
    console.log(a1.a);
    console.log(a1.age);
};
//
//
console.log("object");
const aa = { a: "hun", age: 22, c: true }; // ทำแบบนี้ก็ได้
// aa.a = 23 // ทำไม่ได้
aa.a = "23"; // ทำได้
console.log(aa);
const aaaa = { a: "hun", age: 22 }; // ทำแบบนี้ก็ได้
ff(aa);
const array = ["11", 22, "33", true, 55];
const arr = ["11", "22", "33", "44", "55"];
fff(aa, array, arr, 40, aa);
// แบบนี้ก็ได้
const testtest = (a) => {
    const { age } = a;
    console.log(age);
    return { a: "as", aaaaa: "asdfasdf" };
};
// แบบนี้ก็ได้
const testtesttest = (a) => {
    return { a: "as", aaaaa: "asdfasdf" };
};
console.log(testtest({ age: 500 }));
const { aaaaa } = testtest({ age: 400 });
console.log(aaaaa);
const A = "a";
const B = "b";
const AA = ({ A, B }) => {
    console.log(A + B);
};
AA({ A, B });
//
console.log(" ");
console.log("type aliases");
console.log("เหมือนสร้างรูปแบบนการจะสร้าง obj ออกมาก่อน ถ้ามี ? ตามหลังก็ไม่ต้องใส่ก็ได้");
console.log("readonly คือ ไม่สามารถเปลี่ยนแปลง value ได้");
const Employees = { name: "hun", age: 20, salary: 50 };
const Employee1 = { name: "Weerapaht", age: 1 };
Employees.name = "Weeraphat";
// Employees.age = 1; // readonly ทำให้ error มันเปลี่ยนค่าไม่ได้
console.log(Employees.name);
console.log(Employees);
console.log(Employee1);
console.log(" ");
console.log("array");
const arr1 = [];
const arr2 = new Array();
const arr3 = new Array(2, 3, 4);
// ถ้าทำหนดชนิดข้อมูลก็จะต้องทำข้อมูลแบบนั้นทั้งหมดเปลี่ยนไม่ได้
const arr4 = new Array("2", "3", "4");
const arr5 = new Array(true, false);
// console.log(arr1); // พังเพราะว่ามันไม่สามารถอ่านได้
console.log(arr2);
console.log(arr3);
console.log(arr3[2]);
console.log(arr4);
console.log(arr5);
arr4.push("123123");
arr4.unshift("32");
console.log(arr4[5]); // ถ้าไม่เจอก็จะเป็น undefined
arr4[3] = "adsfasdfasdf";
for (let i of arr4) {
    console.log(i);
}
for (let i in arr4) {
    console.log(i); // ถ้าเป็น index จะเป็นแบบ str
    console.log(+i);
}
arr4.forEach((item, index, arr) => console.log(item, index, arr));
console.log(arr4.length);
console.log(arr4.indexOf("32"));
console.log(arr4.findIndex((item) => item > "20")); // index แรกที่เป็น จริง
console.log(arr4.filter((item) => item > "13"));
console.log(arr4.includes("ads")); // ไม่เจอ ads
const str = "sdfsdfsdfsdffsd";
console.log(str.includes("ff")); // เช็คว่ามี ff ไหมในประโยค
console.log(" ");
console.log("array type aliases");
const arr6 = ["a", 6];
const arr7 = []; // aliase array
arr7.push({ name: "Weera", age: 2 }); // รับเป็น obj ตาม type aliase เท่านั้น และก็ต้องมี properties เหมือนกับ type aliase ด้วย
arr7.push({ name: "Weera", age: 2, salary: 50000 });
console.log(arr7);
for (let i of arr7) {
    console.log(i);
}
// arr7.push("asdf"); // error  รับเป็น obj ตาม type aliase เท่านั้น และก็ต้องมี properties เหมือนกับ type aliase ด้วย
// const arr7: arr = [1, 1]; // error เพราะว่าไม่ตรงกับ type alias
console.log(" ");
console.log("function overloading");
function sayHi(name) {
    if (!name) {
        return "Hello js";
    }
    if (typeof name == "string") {
        return `hello, ${name}`;
    }
    throw new Error("errorrrrrrrr");
}
console.log(sayHi("HUNNNNNN"));
// console.log(sayHi(2)); // error เพราะว่า type ไม่ถูกต้อง เลย throw error
console.log(" ");
console.log("spread operator");
const section = ["A", "B", "C"];
const department = ["Z", "Y"];
const total1 = section.concat(department);
console.log(section, "section");
console.log(department, "department");
console.log(total1, "total");
console.log([...section, ...department]);
console.log(" ");
console.log("rest parameter จะรับเข้าไปเป็น array");
const rest = (...a) => {
    // number[] เพราะว่ามันจะถูกเก็บในรูปแบบของ array เลยใช้ array
    console.log(a);
    let total = 0;
    for (let i of a) {
        total += i;
    }
    console.log(total);
};
rest(2, 5, 6, 7, 8, 0);
const restSum = (...a) => {
    return a.reduce((acc, item) => (acc += item), 0);
};
console.log(restSum(3, 4, 5));
console.log(" ");
console.log("destructuring");
const [s, t] = arr;
console.log(arr);
console.log(s); // ก็จะได้ตัวแรก
console.log(t); // ก็จะได้ตัวถัดไป
const red = arr[0];
console.log(red, "red");
const { age, c } = aa;
console.log(aa, "aa");
console.log(age, "age");
console.log(c, "c");
const functionDestructuring = ({ name, age, lang, }) => {
    console.log(name, "name");
    console.log(age, "age");
    console.log(lang, "lang");
};
functionDestructuring({ age: 44, name: "hunhun", lang: "th" }); // ต้องส่งเข้าไปให้ครบทุกตัว Destructuring จาก function
functionDestructuring({ age: 44, name: "hunhun" }); // ต้องส่งเข้าไปให้ครบทุกตัว
// const functionDestructuring2 = (obj: object) => {
//   const { name }: { name: string } = { ...obj };
//   console.log(name);
// };
// functionDestructuring2({ name: "hunza", age: 202, gender: "th" });
const point = [2, 3];
console.log(point);
const testtt = ({ age, name }) => {
    console.log(age, "age");
    console.log(name, "name");
};
const obj = { name: "hun", age: 33, gender: "th" };
testtt(obj); // ถ้าส่งเป็นตัวแปลเข้ามาก็ทำได้เลย
// testtt({ name: "hun", age: 33, gender: "th" }); // ถ้าจะส่งเข้าไปแบบนี้ก็ต้องมีให้เหมือนกับ function ที่ต้องการรับ
//
//
//
//
//
//
//
class User {
    // private test:string // ใช้ได้เฉพาะใน class นี้เท่านั้น extends หรือแก้ไขโดยตรงไม่ได้
    constructor(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    addAmount(amount) {
        this.amount += amount;
    }
    decreateAmount(amount) {
        if (this.amount - amount > 0) {
            this.amount -= amount;
        }
    }
    showData() {
        console.log(`my name is ${this.name} ${this.age} year old, I have ${this.amount} bath`);
    }
    sayHi() {
        console.log("Hi");
    }
}
const user = new User("hun", 22, 400);
// user.name = "tomahock"; // redonly เพราะว่าไม่อนุญาติให้แก้ไขข้อมูล
// user.amount = 1212;
user.showData();
user.addAmount(500);
user.showData();
user.decreateAmount(1000);
user.showData();
console.log("   ");
class upperUser extends User {
    constructor(name, age, amount, address) {
        super(name, age, amount); // มันจะได้เอากลับไปที่ User(parent)
        this.address = address;
    }
    showAddress() {
        console.log(`My address ${this.address}`);
    }
    sayHello() {
        this.sayHi();
        console.log("Hello");
    }
    showData() {
        console.log(`my name is ${this.name} ${this.age} year old, I have ${this.amount} bath, address: ${this.address}`);
    }
    upupAmount(amount) {
        this.amount += amount;
    }
    addAmount(amount) {
        this.amount += amount * 0.001;
    }
}
const superUser = new upperUser("huin", 1, 200, "asdf");
superUser.addAmount(2);
superUser.showAddress();
superUser.upupAmount(20000000);
superUser.showData();
superUser.sayHello();
const aaa = { age: 22, username: "23" };
const aaaaaa = { age: 12, username: "a" };
const aaaaaaa = { address: "12", age: 1, username: "12" };
class tesTT {
    constructor(user, user2) {
        this.age = user.age;
        this.username = user.username;
        this.user2Name = user2.username;
    }
}
const testttt = new tesTT({ age: 12, username: "12", address: "121212" }, { age: 12, username: "12" });
console.log(testttt);
console.log("abstract คือ เป็นตัวกำหนดว่าต้องมีอะไร");
class abs {
}
class abs1 extends abs {
    name() {
        console.log("testtttttttt");
    }
}
const abs2 = new abs1();
abs2.name();
class z {
    showName() {
        console.log("ZZ");
    }
}
class Z extends z {
    constructor(age) {
        super(); // ต้องมีการประกาศ super
        this.age = age;
    }
    showAge() {
        return this.age;
    }
}
const ZZ = new z();
ZZ.showName();
console.log(new Z(1).showAge());
// generic
// จะให้ส่งที่ส่งเข้ามามี type เป็นอะไร และก็จะใช้ความสามารถนั้นๆได้
function testhun(username) {
    return username;
}
const TESTHUN = testhun("asd");
TESTHUN.length;
const TESTHUN2 = testhun(["asd", "asdf"]);
TESTHUN2.length;
function testhun2(u) {
    return u;
}
const testhun3 = testhun2({ name: "asd", array: ["asd", "asd"] });
testhun3.name.length;
const userReturn2 = (y, ...x) => {
    console.log(x, y);
};
userReturn2(1, 2, 3, 4, 5);
//
//
const userReturn3 = (y, ...x) => {
    console.log(x, y);
};
userReturn3(1, 2, 3, 4, 5);
const a12 = {
    name: "hun",
    age: 22,
};
Object.assign(a12, { name: "weera", address: "123" });
console.log(a12, "a12");
const a14 = Object.assign(Object.assign({}, a12), { name: "weera", address: "123" });
console.log(a14, "a14");
const a15 = [1, 2, 3, 4, 5];
const a16 = [...a15, 6, 7, 8, 9];
console.log(a16, "a16");
const us = {
    username: "hun",
    age: 22,
    address: "123",
};
function functionUs(a) {
    return "asdfasdf";
}
console.log(functionUs(us));
