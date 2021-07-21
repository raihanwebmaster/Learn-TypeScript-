"use strict";
var myName = "Raihan Uddin";
var age;
age = 12;
var isHungry = false;
var gameDirection = "left";
var studentId = 42;
studentId = "web4-42";
var person = {
    name: "Raihan Uddin",
    age: 23,
    hobby: "Programming",
};
var person1 = {
    name: "Muntaha Naz Monsur Omi",
    age: 22,
    hobby: "Programming",
};
// Array
var number = [33, 40, 50, 80, "uddin"];
var persons = [
    {
        name: "Raihan Uddin",
        age: 23,
        hobby: "Programming",
    },
    {
        name: "Raihan Uddin",
        age: 23,
        hobby: "Programming",
    },
    {
        name: "Raihan Uddin",
        age: 23,
        hobby: "Programming",
    },
];
// functions
var greeting = function (name) {
    console.log("hello " + name);
};
greeting("Raihan");
var add = function (a, b) {
    return a + b;
};
var introduces = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("hello, my name is " + name + ", And I'm " + age);
};
var introduce = function (person) {
    console.log("hello, my name is " + person.name + ", And I'm " + person.age);
};
introduce({
    name: "Raihan Uddin",
    age: 23,
    hobby: "Programming",
});
var getArray = function (arr) {
    return arr;
};
getArray(["dfjsdklf"]);
// enum
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tus"] = "TUS";
    Week["Wed"] = "WED";
    Week["Thur"] = "THUR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Mon);
