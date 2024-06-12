// 클래스
class House{
    constructor(year, name, window){
        this.year = year
        this.name = name
        this.window = window
    }

    getAge(){
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요`);
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다`);
    }
}


const house1 = new House(1990, '롯데', 2);    // 클래스를 이용해 인스턴스를 생성 시 constructor에 선언된 파라미터대로 값을 지정
console.log(house1);    // House { year: 1990, name: '롯데', window: 2 }
console.log(typeof house1);    // object
console.log(house1.year);
house1.getAge();     // 롯데는 건축한지 34년 되었어요
house1.getWindow();     // 롯데의 창문은 2개 입니다


// 클래스의 상속
class Apartment extends House{
    constructor (year, name, window, floor, windowMaker){
        super(year, name, window)     // 부모 클래스의 속성 가져오기
        this.floor = floor
        this.windowMaker = windowMaker
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 
            총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
      }

      // override (오버라이드) - 부모의 메소드와 같은 함수를 재정의할때
      getWindow() {
        return `${this.name} 아파트의 ${this.window} 개의 창문은 
            ${this.windowMaker} 회사에서 생산되었습니다.`;
      }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC')
console.log(apt1);    //Apartment {
                    //     year: 2022,
                    //     name: '래미안',
                    //     window: 3,
                    //     floor: 20,
                    //     windowMaker: 'KCC'
                    // }
console.log(apt1.getAptInfo());    // 2022년에 지어진 래미안 아파트의 총 층수는 20 이며, 창문의 개수는 3이다.
console.log(apt1.getWindow());     //래미안 아파트의 3 개의 창문은 KCC 회사에서 생산되었습니다.