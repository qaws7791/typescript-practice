// 1. SRP 단일 책임 원칙
// ❎
class UserService {
  constructor(private db: Database) {}

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: User): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }

  sendWelcomeEmail(user: User): void {
    // 갑분 이메일 전송 로직이 여기 왜?
    const emailService = new EmailService();
    emailService.sendWelcomeEmail(user);
  }
}
// ✅
class UserService {
  constructor(private db: Database) {}

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: User): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }
}

class EmailService {
  // 이메일 관련된 기능은 이메일 서비스에서 총괄하는게 맞습니다.
  // 다른 서비스에서 이메일 관련된 기능을 쓴다는 것은 영역을 침범하는 것이에요!
  sendWelcomeEmail(user: User): void {
    // 이메일 전송 로직
    console.log(`Sending welcome email to ${user.email}`);
  }
}

// 2. OCP 개방 폐쇄 원칙
// 확장에 대해서는 열려 있고, 수정에 대해서는 닫혀 있다
// 기존 코드 변경없이 인터페이스, 상속을 통해 기능을 확장 가능

// 3. LSP 리스코프 치환 원칙
// 서브타입은 기반이 되는 슈퍼타입을 대체할 수 있어야 한다
// ❎
class Bird {
  fly(): void {
    console.log("펄럭펄럭~");
  }
}

class Penguin extends Bird {
  // 으잉? 펭귄이 날 수 있나요? 펭귄이 펄럭펄럭~ 한다는 것은 명백한 위반이죠.
}

// ✅
abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  move() {
    console.log("펄럭펄럭~");
  }
}

class NonFlyingBird extends Bird {
  move() {
    console.log("뚜벅뚜벅!");
  }
}

class Penguin extends NonFlyingBird {} // 이제 위배되는 것은 아무것도 없네요!

// 4. ISP 인터페이스 분리 원칙
// 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 한다

// 5. DIP 의존성 역전 원칙
// 하위 수준 모듈보다 상위 수준의 모듈에 의존 해야 한다
interface MyStorage {
  save(data: string): void;
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장: ${data}`);
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장: ${data}`);
  }
}

class Database {
  // 상위 수준 모듈인 MyStorage 타입을 의존!
  // 여기서 MyLocalStorage, MyCloudStorage 같은 하위 수준 모듈에 의존하지 않는게 핵심!
  constructor(private storage: MyStorage) {}

  saveData(data: string): void {
    this.storage.save(data);
  }
}

const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();

const myLocalDatabase = new Database(myLocalStorage);
const myCloudDatabase = new Database(myCloudStorage);

myLocalDatabase.saveData("로컬 데이터");
myCloudDatabase.saveData("클라우드 데이터");
