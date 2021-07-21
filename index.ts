let myName: string = "Raihan Uddin";

let age: number;
age = 12;

let isHungry: boolean = false;

type StringOrNumber = string | number;
type direction = "left" | "right";

let gameDirection: direction = "left";

let studentId: StringOrNumber = 42;
studentId = "web4-42";

interface Person {
  name: string;
  age: number;
  hobby?: string;
}

type PersonType = { name: string; age: number; hobby: string };

let person: Person = {
  name: "Raihan Uddin",
  age: 23,
  hobby: "Programming",
};

let person1: Person = {
  name: "Muntaha Naz Monsur Omi",
  age: 22,
  hobby: "Programming",
};

// Array
const number: (number | string)[] = [33, 40, 50, 80, "uddin"];
const persons: Person[] = [
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

const greeting = (name: string): void => {
  console.log(`hello ${name}`);
};

greeting("Raihan");

const add = (a: number, b: number): number => {
  return a + b;
};

const introduces = ({ name, age }: Person): void => {
  console.log(`hello, my name is ${name}, And I'm ${age}`);
};

const introduce = (person: Person): void => {
  console.log(`hello, my name is ${person.name}, And I'm ${person.age}`);
};

introduce({
  name: "Raihan Uddin",
  age: 23,
  hobby: "Programming",
});

const getArray = <T>(arr: T[]): T[] => {
  return arr;
};

getArray<string>(["dfjsdklf"]);

// enum

enum Week {
  Sat = "SAT",
  Sun = "SUN",
  Mon = "MON",
  Tus = "TUS",
  Wed = "WED",
  Thur = "THUR",
  Fri = "FRI",
}

console.log(Week.Mon);
