/** p.3
 * 자바스크립트의 함수는 객체다.
 * Function 생성자에 의해 생성된다.
 * 함수는 객체이므로 프로퍼티와 메서드를 가질 수 있다.
 */

var workout = function () {
};
console.log(workout instanceof Function);

function User() {

}

var user = new User();

/////////////////////////////////////////////////////////

/**
 * p.4
 * 자바스크립트에서 객체를 생성하는 몇 가지 방법.
 */

//1.Object 생성자를 이용한다.
var user = new Object();
user.name = 'grace';
user.interests = ['Traveling', "Swimming"];
user.greeting = function () {
    console.log('hi im ' + this.name);
};
user.greeting();

//2. 객체 리터럴을 이용한다. (권장)
var user = {
    name: 'graceLove',
    interests: ['Traveling', "Swimming"],
    greeting: function () {
        console.log('hi im ' + this.name);
    },
};
user.greeting();