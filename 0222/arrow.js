const fruits = [
    {
        name: 'apple',
        price: 100
    },
    {
        name: 'orange',
        price: 80
    },
    {
        name: 'banana',
        price: 120
    }
];

//변형 1.
//인자가 없을 때 빈 괄호 세트() 가 필요하다.
var countFruits = () => fruits.length;
// es5 코드
// var countFruits = function() {
//     return fruits.length;
// };

//변형2.
// 하나의 인자가 있을 떄 괄호는 생략할 수 있다.
// 표현식의 값은 함수의 반환 값이다.
fruits.filter(fruit => fruit.price > 100);


//변형3
//함수가 객체 리터럴을 반환할 때 괄호로 감싸야한다.
// var inventory = fruits.map(fruit => ({
//     name: fruit.name,
//     storage: 1
// }));

//변형4
//화살표함수가 구문들로 이뤄진 본문을 가지고 있고 결과를 반환해야할 때 return구문 필요.
var inventory = fruits.map( f => {
    console.log(`Checking ${f.name} storage`);
    return {
        name: f.name,
        storage: 1
    }
});