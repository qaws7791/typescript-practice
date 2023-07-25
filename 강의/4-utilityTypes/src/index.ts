// Partial<T> 부분집합 속성

interface Person {
  name: string;
  age: number;
}

const updatePerson = (person: Person, fields: Partial<Person>): Person => {
  return { ...person, ...fields };
};

const person: Person = { name: "Spartan", age: 30 };
const changedPerson = updatePerson(person, { age: 31 });

//Required<T> 모든 속성을 필수 속성으로 만듦

interface Person {
  name: string;
  age: number;
  address?: string; // 속성 명 뒤에 붙는 ?가 뭘까요
}

type RequiredPerson = Required<Person>;

// Readonly<T> 모든 속성을 readonly로 만듦
interface DatabaseConfig {
  host: string;
  readonly port: number; // 인터페이스에서도 readonly 타입 사용 가능해요!
}

const mutableConfig: DatabaseConfig = {
  host: "localhost",
  port: 3306,
};

const immutableConfig: Readonly<DatabaseConfig> = {
  host: "localhost",
  port: 3306,
};

// mutableConfig.host = "somewhere";
// immutableConfig.host = "somewhere"; // 오류!

//Pick<T,K> 특정 속성들을 선택하여 새로운 타입을 생성
interface Person {
  name: string;
  age: number;
  address?: string;
}

type SubsetPerson1 = Pick<Person, "name" | "age">;

const person2: SubsetPerson1 = { name: "Spartan", age: 30 };

//Omit<T,K> 특정 속성들을 제외한 새로운 타입을 생성
interface Person {
  name: string;
  age: number;
  address?: string;
}

type SubsetPerson2 = Omit<Person, "address">;

const person3: SubsetPerson2 = { name: "Alice", age: 30 };
