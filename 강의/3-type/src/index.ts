//boolean type

function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

// const password = "q1w2e3r4!";
// const valid = isValidPassword(password);

// if (valid) {
//   console.log("유효한 패스워드입니다!");
// } else {
//   console.log("유효하지 않은 패스워드입니다!");
// }

//number type

function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

// const radius = 5;
// const area = calculateArea(radius);

//string type

function greet(name: string): string {
  return `안녕, ${name}!`;
}

// greet("Spartan");

//array type

function calculateSum(numbers: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// const testScores: number[] = [90, 85, 78, 92, 88];
// const sumScore = calculateSum(testScores);
// console.log(`점수의 총합: ${sumScore}`);

//tuple type

const person: [string, number, boolean] = ["Spartan", 25, false];
// const person2: [string, number, boolean] = [25, 'Spartan', false]; // 오류!

//enum type

enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}

enum UserLevel {
  NOT_OPERATOR, // 0
  OPERATOR, // 1
}

function checkPermission(userRole: UserRole, userLevel: UserLevel): void {
  if (userLevel === UserLevel.NOT_OPERATOR) {
    console.log("당신은 일반 사용자 레벨이에요");
  } else {
    console.log("당신은 운영자 레벨이군요");
  }

  if (userRole === UserRole.ADMIN) {
    console.log("당신은 어드민이군요");
  } else if (userRole === UserRole.EDITOR) {
    console.log("당신은 에디터에요");
  } else {
    console.log("당신은 사용자군요");
  }
}

// const userRole: UserRole = UserRole.EDITOR;
// const userLevel: UserLevel = UserLevel.NOT_OPERATOR;
// checkPermission(userRole, userLevel);

//readonly
class Person {
  // 클래스는 다른 강의에서 자세히 설명해드릴게요!
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// const person = new Person('Spartan', 30);

// console.log(person.name);  // 출력: 'Spartan'
// console.log(person.age);   // 출력: 30

// person.name = 'Jane';  // 에러: 'name'은 readonly 속성이므로 다시 할당할 수 없어요!
// person.age = 25;       // 에러: 'age'은 readonly 속성이므로 다시 할당할 수 없어요!

//any type

let anything: any;
anything = 5; // 최초에는 숫자를 넣었지만
anything = "Hello"; // 문자열도 들어가고요
anything = { id: 1, name: "John" }; // JSON도 들어가네요

// unknown type

let unknownValue: unknown = "나는 문자열이지롱!";
console.log(unknownValue); // 나는 문자열이지롱!

let stringValue: string;
// stringValue = unknownValue; // 에러 발생! unknownValue가 string임이 보장이 안되기 때문!
stringValue = unknownValue as string;
console.log(stringValue); // 나는 문자열이지롱!

// union type

type StringOrNumber = string | number; // 원한다면 | boolean 이런식으로 타입 추가가 가능해요!

function processValue(value: StringOrNumber) {
  if (typeof value === "string") {
    // value는 여기서 string 타입으로 간주됩니다.
    console.log("String value:", value);
  } else if (typeof value === "number") {
    // value는 여기서 number 타입으로 간주되구요!
    console.log("Number value:", value);
  }
}

// processValue('Hello');
// processValue(42);
