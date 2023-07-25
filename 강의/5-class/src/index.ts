// create class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

const person = new Person("Spartan", 30);
person.sayHello();

// access modifier
// public: 클래스 외부에서도 접근이 가능
// private: 클래스 내부에서만 접근이 가능
// protected: 클래스 내부와 해당 클래스를 상속받은 자식 클래스에서만 접근이 가능
class Person2 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello() {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`
    );
  }
}

// inheritance

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("동물 소리~");
  }
}

class Dog extends Animal {
  age: number;

  constructor(name: string) {
    super(name);
    this.age = 5;
  }

  makeSound() {
    console.log("멍멍!"); // 부모의 makeSound 동작과 달라요!
  }

  eat() {
    // Dog 클래스만의 새로운 함수 정의
    console.log("강아지가 사료를 먹습니다.");
  }
}

class Cat extends Animal {
  // Animal과 다를게 하나도 없어요!
}

const dog = new Dog("누렁이");
dog.makeSound(); // 출력: 멍멍!

const cat = new Cat("야옹이");
cat.makeSound(); // 출력: 동물 소리~

//upcasting

let dog2: Dog = new Dog("또순이");
let animal2: Animal = dog2; // upcasting 발동!
// animal.eat(); // 에러. 슈퍼타입(Animal)으로 변환이 되어 eat 메서드를 호출할 수 없어요!

//downcasting
let animal3: Animal;
animal3 = new Dog("또순이");

let realDog: Dog = animal3 as Dog;
realDog.eat(); // 서브타입(Dog)로 변환이 되었기 때문에 eat 메서드를 호출할 수 있죠!

//abstract class

abstract class Shape {
  abstract getArea(): number; // 추상 함수 정의!!!

  printArea() {
    console.log(`도형 넓이: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    // 원의 넓이를 구하는 공식은 파이 X 반지름 X 반지름
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    // 사각형의 넓이를 구하는 공식은 가로 X 세로
    return this.width * this.height;
  }
}

const circle = new Circle(5);
circle.printArea();

const rectangle = new Rectangle(4, 6);
rectangle.printArea();
